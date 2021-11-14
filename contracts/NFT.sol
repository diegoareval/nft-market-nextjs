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

}