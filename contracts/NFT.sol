// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counters private _tokenIds;
    address contactAddress;

    constructor(address marketPlaceAddress) ERC721('Metaverse Tokens', 'METT'){
    contactAddress = marketPlaceAddress;
    }

    function createToken(string memory tokenURI) public returns(uint){
         _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contactAddress, true);
        return newItemId;
    }

}