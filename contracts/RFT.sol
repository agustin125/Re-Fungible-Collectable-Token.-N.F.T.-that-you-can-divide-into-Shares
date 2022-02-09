// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract RFT is ERC20 {
  //+-I.C.O. & Shares:_
  uint256 public icoSharePrice;
  uint256 public icoShareSupply;
  uint256 public icoEnd;

  //NFT & DAI
  uint256 public nftId;
  IERC721 public nft;
  IERC20 public dai;

  //other
  address public admin;

  constructor(
    string memory _name,
    string memory _symbol,
    address _nftAddress, 
    uint256 _nftId,
    uint256 _icoSharePrice,
    uint256 _icoShareSupply,
    address _daiAddress
  ) 
  ERC20(_name, _symbol) 
  {
    nftId = _nftId;
    //+-Pointer to our N.F.T.:_
    nft = IERC721(_nftAddress);
    icoSharePrice = _icoSharePrice; 
    icoShareSupply = _icoShareSupply;
    dai = IERC20(_daiAddress);
    admin = msg.sender;
  }

  /**+-We Transfer the N.F.T. from the Admin's Wallet to this Smart Contract,
  we Divide it in Shares and We sell it in an I.C.O/Normal Auction:_*/
  function startIco() external {
    require(msg.sender == admin, 'Only Admin can do this.');
    nft.transferFrom(msg.sender, address(this), nftId);
    //+-By Default, the Auction lates 7 Days:_
    icoEnd = block.timestamp + 7 days;
  }

  //+-Function for the Users to Buy Shares of the N.F.T. at the I.C.O/Normal Auction:_
  function buyShare(uint256 shareAmount) external {
    require(icoEnd > 0, 'I.C.O. not started yet.');
    require(block.timestamp <= icoEnd, 'I.C.O. is Finished.');
    require(totalSupply() + shareAmount <= icoShareSupply, 'Not Enough Shares left.');
    uint256 daiAmount = shareAmount * icoSharePrice;
    dai.transferFrom(msg.sender, address(this), daiAmount);
    _mint(msg.sender, shareAmount);
  }

  /**+-Function for the Admin to Withdraw the Profits in DAI after the I.C.O/Normal Auction finished
  and the Shares of the N.F.T. that have not been Sold at the I.C.O/Normal Auction:_*/
  function withdrawIcoProfits() external {
    require(msg.sender == admin, 'Only Admin can do this.');
    require(block.timestamp > icoEnd, 'I.C.O. Not Finished yet.');
    uint256 daiBalance = dai.balanceOf(address(this));
    if(daiBalance > 0) {
      dai.transfer(admin, daiBalance);
    }
    uint256 unsoldShareBalance = icoShareSupply - totalSupply();
    if(unsoldShareBalance > 0) {
      _mint(admin, unsoldShareBalance);
    }
  }
}
