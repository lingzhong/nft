async function main(nftName) {
  const NFT = await ethers.getContractFactory(nftName)

  // Start deployment, returning a promise that resolves to a contract object
  const nftContract = await NFT.deploy()
  await nftContract.deployed()
  console.log("Contract deployed to address:", nftContract.address)
  console.log("View on Etherscan: https://ropsten.etherscan.io/address/".concat(nftContract.address))
}

main("LeanNFT")
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

