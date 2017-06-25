module.exports = function(grunt) {
  const refs = [
    "schema/address.schema.json",
    "schema/Party.schema.json",
    "schema/person.json",
    "schema/phone.json",
    "schema/phoneContactMethod.json",
    "schema/addressContactMethod.json"
  ];
  grunt.loadNpmTasks("grunt-jsonschema-faker");

  grunt.initConfig({
    jsonschema_faker: {
      options: {
        indent: 2
      },
      orgs: {
        src: ["schema/Party.schema.json"],
        dest: "data/file.json",
        options: {
          size: 1000,
          references: refs
        }
      },
      people: {
        src: ["schema/person.json"],
        dest: "data/people.json",
        options: {
          size: 500,
          references: refs
        }
      },
      customer: {
        src: ["schema/customer.json"],
        dest: "data/customer.json",
        options: {
          size: 200,
          references: refs
        }
      }
    }
  });

  grunt.registerTask("default", [
    "jsonschema_faker:orgs",
    "jsonschema_faker:people",
    "jsonschema_faker:customer"
  ]);
};
