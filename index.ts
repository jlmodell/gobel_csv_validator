import CSVFileValidator from "csv-file-validator";
import type { ValidatorConfig, FieldSchema } from "csv-file-validator";
import * as fs from "fs";

const arrayOfStates = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const config: ValidatorConfig = {
  headers: [
    {
      name: "_id",
      inputName: "_id",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "vendor",
      inputName: "vendor",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "division",
      inputName: "division",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "customer_id",
      inputName: "customer_id",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "customer",
      inputName: "customer",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "address",
      inputName: "address",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "city",
      inputName: "city",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "state",
      inputName: "state",
      validate: (value) => {
        return arrayOfStates.includes(value);
      },
      validateError: (headerName, rowNumber, colNumber) => {
        return `Header '${headerName}' has an invalid value at row ${rowNumber} and column ${colNumber}`;
      },
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "postal_code",
      inputName: "postal_code",
      required: true,
      validate: (value) => {
        return value.length >= 5;
      },
      validateError: (headerName, rowNumber, colNumber) => {
        return `Header '${headerName}' has an invalid value at row ${rowNumber} and column ${colNumber}`;
      },
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "vendor_item",
      inputName: "vendor_item",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "buyer_item",
      inputName: "buyer_item",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "quantity",
      inputName: "quantity",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "uom",
      inputName: "uom",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "sale",
      inputName: "sale",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "po",
      inputName: "po",
      required: true,
      //   unique: true,
      //   uniqueError: (headerName, rowNumber) => {
      //     return `Header '${headerName}' is not unique at row ${rowNumber}`;
      //   },
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
    {
      name: "po_date",
      inputName: "po_date",
      required: true,
      requiredError: (headerName, _, __) => {
        return `Header '${headerName}' is required`;
      },
    },
  ] as FieldSchema[],
  isHeaderNameOptional: false,
};

const main = (config: ValidatorConfig) => {
  fs.readFile("./tests/TS202211.CSV", (err, data) => {
    if (err) throw err;

    const fileString = data.toString();

    CSVFileValidator(fileString, config)
      .then((validator) => {
        return {
          //   data: validator.data,
          inValidData: validator.inValidData,
          countInvalid: validator.inValidData.length,
        };
      })
      .then(console.log)
      .catch(console.error);
  });
};

// run the main function

try {
  main(config);
} catch (e) {
  console.error(e);
}
