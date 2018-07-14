var farmInformation = artifacts.require("../contracts/farmInformation.sol");

module.exports = function(deployer) {
  deployer.deploy(farmInformation, "this is a test");
};