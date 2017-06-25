module.exports = function(grunt) {
  const refs = [
    "schema/address.schema.json",
    "schema/partyCompany.json",
    "schema/partyContact.json",
    "schema/phone.json",
    "schema/phoneContactMethod.json",
    "schema/addressContactMethod.json",
    "schema/relatedParty.json",
    "schema/contactMethod.json"
  ];
  grunt.loadNpmTasks("grunt-jsonschema-faker");

  grunt.initConfig({
    jsonschema_faker: {
      options: {
        indent: 2
      },
      companies: {
        src: ["schema/partyCompany.json"],
        dest: "data/companies.json",
        options: {
          size: 10,
          references: refs
        }
      },
      people: {
        src: ["schema/partyContact.json"],
        dest: "data/contacts.json",
        options: {
          size: 10,
          references: refs
        }
      },
      customer: {
        src: ["schema/customer.json"],
        dest: "data/customers.json",
        options: {
          size: 500,
          references: refs
        }
      }
    }
  });

  grunt.registerTask("companies", ["jsonschema_faker:companies"]);

  grunt.registerTask("default", [
    "jsonschema_faker:companies",
    "jsonschema_faker:people",
    "jsonschema_faker:customer"
  ]);
};
