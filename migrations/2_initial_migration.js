var farmInformation = artifacts.require("../contracts/farmInformation.sol");

module.exports = function(deployer) {
  deployer.deploy(farmInformation, "This product was grown in Vancouver");
};