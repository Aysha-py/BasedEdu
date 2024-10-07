const hre = require("hardhat");

async function main() {
  const ContractName = await hre.ethers.getContractFactory("MyContract");

  const contract = await ContractName.deploy("Hello, Blockchain!");

  const receipt = await contract.waitForDeployment();

  console.log(
    "Contract deployed successfully at: Hello Amara!",
    contract.target
  );
}

main().catch((error) => {
  console.error("Error during deployment:", error);
  process.exitCode = 1;
});
