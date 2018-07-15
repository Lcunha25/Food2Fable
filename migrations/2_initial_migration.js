var farmInformation = artifacts.require("../contracts/farmInformation.sol");

module.exports = function(deployer) {
  deployer.deploy(farmInformation, "Harvested JUN/2018");
};