async function main() {
  const EthereumOrgTutorialNFT = await ethers.getContractFactory("EthereumOrgTutorialNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const nftContract = await EthereumOrgTutorialNFT.deploy()
  await nftContract.deployed()
  console.log("Contract deployed to address:", nftContract.address)
  console.log("View on Etherscan: https://ropsten.etherscan.io/address/".concat(nftContract.address))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

