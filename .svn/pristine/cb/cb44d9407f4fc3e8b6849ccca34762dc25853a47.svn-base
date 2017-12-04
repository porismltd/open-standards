# Tools

## Aids to data publishing

### URI search

The LGA’s [URI search tool](http://uris.opendata.esd.org.uk/) permits lookup of URIs from commonly used URI sets. It currently references URI sets that contain URIs needed by one or more of these [LGA schemas](http://schemas.opendata.esd.org.uk/?publisher=LGA), [GDS schemas](http://schemas.opendata.esd.org.uk/?publisher=GDS+%E2%80%93+Government+Digital+Service) or [DCLG schemas](http://schemas.opendata.esd.org.uk/?publisher=DCLG) used by UK local government. The URI sets cover the following types of data.

* CIPFA objective category

* Licence entertainment type

* Licence applicant type

* Licence status

* Local authority

* Neighbourhood area type

* Neighbourhood area

* Planning classification

* Service

* Statistical geography, including many of the administrative geographies (like Parliamentary Constituencies and Wards) that define the spatial extent of data

A search can be made across all types if you’re not clear which applies. For example, [a search on Lambeth](http://uris.opendata.esd.org.uk/?FuzzySearch=False&Label=lambeth&MappingTypeId=0&OrganisationId=-1&PartialMatch=True&HasSearched=True#exact) finds both the Lambeth local authority and areas called Lambeth. The search tool will be extended to support other URI sets as their URIs are required by local government schemas. 

### Defining your own areas 

An area has a shape (or polygon), metadata, and relationships to other areas. The shape determines the geographical extent of the area; the metadata includes a unique identifier, a label or name, and an area type (e.g. country, region, district, town centre, etc.). Relationships between areas may denote a hierarchy of parent and child relationships (i.e. what areas contain other areas). For example, England (country) has a child of North West (region), which has a child of Cheshire East (local authority, or unitary).

When areas are not defined in this way by a reliable publisher, you need to publish your own areas. The LGA’s [Natural Neighbourhoods](http://neighbourhoods.esd.org.uk/) tool makes that possible.

Natural Neighbourhoods offers many pre-defined area types and lets you define your own. Using pre-existing types as the building blocks for custom geographies makes it easier to compare with areas and related data created by others. The tool lets you define the boundary (giving the shape) of a new area by drawing on a map, import from KML or defining the child areas which combine to make up the new area.

Natural Neighbourhoods lets you download metadata for all areas of one type (e.g. [British Parliamentary constituencies](http://neighbourhoods.esd.org.uk/api/category/CONSTITUENCY.csv)) and the shape of any one in [KML](http://neighbourhoods.esd.org.uk/api/neighbourhood/E14000803.kml) or [GeoJSON](http://neighbourhoods.esd.org.uk/api/neighbourhood/E14000803.geojson) format.

### Publishing your own Linked Data

[Fuseki](http://jena.apache.org/documentation/fuseki2/) is a SPARQL server that provides a means of publishing your own Linked Data from a Java based triple store. To set up an instance of the Fuseki server: [Download Fuseki](http://jena.apache.org/download/#jena-fuseki), unpack the downloaded file on a Linux server running Java, and execute the Fuseki jar file. 

A simple and relatively safe way of publishing small quantities of linked open data is to run Fuseki in read-only mode and populate its triple store with batch updates from operational databases. This means that other (e.g. relational) databases can be used for applications that need sophisticated fast performance and that people can run SPARQL queries on the Linked Data, separately hosted, without imposing a load that slows other operations.

Follow these steps to transfer data from relational database.

* Write SQL views for each database to convert data into semantic triples.

* Output those triples into a Turtle-format file.

* Delete the prior Fuseki database.

* Open Fuseki in update mode. 

* Use the HTTP PUT command to import the TTL file.

* Kill Fuseki and restart it in read-only mode.

Fuseki is based on Java, is open source and can be hosted on a cheap Linux server.

### Data modelling

Data models can be expressed as entity relation diagrams (ERDs) or UML class diagrams which can be created with a variety of [UML tools](https://en.wikipedia.org/wiki/List_of_Unified_Modeling_Language_tools). 

Some  ERDs can be generated with tools that accompany major database engines, like [MySQL Workbench](https://www.mysql.com/products/workbench/), and created with diagramming tools such as Microsoft Visio. A good way to start defining the model for a data standard is to extract an ERD from a database that holds the data.

iStandUK’s [Modeller](http://modeller.openpublicdata.com/) is a prototype (under re-development) tool that aims to

* present generic concepts (super-classes and super-properties) and existing lists/taxonomies/registers of objects that represent those concepts,

* allow definition of classes and properties for concepts included in a desired data model,

* define relationships between classes, and

* define ‘archetypes’ from which schemas for different renderings of the model can be auto-generated.

The full version of the prototype is offline and it needs development to become a tool that can be widely used. Nevertheless, it illustrates the principles of building a data standard up from core concepts through well-defined classes to schema representations for multiple data formats.

### Linked Data modelling

iStandUK’s [Open Public Data](http://openpublicdata.com/datasets.php) site is a prototype service to show how Linked Data from many sources can be read in real-time over the web and linked to give a localised view. It features

* lists of tabular data from different Linked Data triple stores;

* datasets which are triple stores containing one or more lists of data; and

* shapes which link up lists to provide a view on the data (a ‘graph’).

For example, the [Function Type shape](http://openpublicdata.com/shape.php?shapeid=19) links the function types list to itself (to reflect its hierarchical nature) and to the service types list via the ‘contains service’ property. Having defined a 'shape' and a dataset that contains those shapes, you can then list results, e.g. [functions](http://openpublicdata.com/list.php?shapeid=19), and view an [individual entry](http://openpublicdata.com/subject.php?uri=http://id.esd.org.uk/function/23&datasetid=5&shapeuri=http://data.istanduk.org/id/eco/shape/19)

The tool lets you visualise shapes as well as express them in a machine readable way via RDF XML.

### Delivering data via a RESTful API

Representational state transfer (RESTful) APIs deliver data over the web in response to queries that are normally constructed programmatically. They are useful where people are likely to want to extract filtered subsets of data from a large data store, e.g. unemployment statistics for just their area or a summary of the latest month’s housing prices. In contrast, static files of data may be used for discrete publications of datasets that people might take as a whole.

[OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) is a standard, supported by Government Digital Service (GDS), for documenting paths, names and descriptions, parameters, and responses for an API. It uses the JSON schema format for responses, enabling programmers to build objects that match the specified data structure from API responses. [Swagger](https://swagger.io/) is an open tool for generating pages to document an API that conforms to the OpenAPI standard. OpenAPI is a relatively new standard and many established APIs do not conform to it.

Here’s a few example APIs from the UK public sector for serving open data.

* [LG Inform Plus API](http://api.esd.org.uk/), providing common methods for accessing data from more than 50 sources of open data, maintained by the LGA.

* [Nomis](https://www.nomisweb.co.uk/api/v01/help?uid=0xd57c2bd58aa382ddb5cae1383cbe476f36609e57), providing labour market statistics, maintained by Durham University.

* [Police API](https://data.police.uk/docs/) for crime statistics.

Closed APIs, such as ones provided by the Department for Work and Pensions (DWP) are used for transfer of information between authorised officers of public sector organisations.

The LG Inform Plus API is documented via its own [web methods page](http://developertools.esd.org.uk/methods) and via the [/explain](http://webservices.esd.org.uk/explain) method. The ‘explain’ parameter is implemented for each web method, such as that returning metric types, with [machine readable](http://webservices.esd.org.uk/metricTypes?explain=true) and [human readable](http://webservices.esd.org.uk/metricTypes.html?explain=true) responses.

In common with many APIs, most of the LG Inform Plus API’s web methods need to be ‘signed’ – the combination of a key and secret to produce a unique signature – to prevent denial of service attacks and to support a charging mechanism for commercial use. There are two common authentication methods used for signing web methods, both of which are deployed by LG Inform Plus: application keys and OAuth. See the [security page](http://api.esd.org.uk/security) for details.

Application keys use the public/private key model whereby each web method call (including its parameters) is signed with a key constructed via an algorithm that uses a private key known only to the API publisher and consumer. The consumer is identified by the public key that is sent with each web method. An access token is also available.

[OAuth](https://oauth.net/) is a protocol for validating a particular user. You can provide your own sign-in service and act as an OAuth provider and/or act as an OAuth consumer, consuming your own or someone else's OAuth service. (OAuth 2.0 is widely adopted.) For example ‘sign in with your Twitter account’ uses Twitter’s registration and sign-in facilities.

OAuth allows you to program APIs that serve data that is restricted just to certain users. For example, a local authority might only want to limit access to new data before it has been verified internally.

[The LG Inform Plus data tool](http://developertools.esd.org.uk/data) provides a user interface to construct data queries. As well as serving the data requested, it constructs API calls for use elsewhere and provides links that can be embedded in data analysis tools such as Microsoft Excel and [Power BI](https://powerbi.microsoft.com/en-us/). These links allow live data to be refreshed from the API for immediate display in external reporting applications.

Providing an API requires you to predict programmer queries and provide corresponding web methods. It offers less flexibility than a Linked Data triple store accessed via SPARQL (see [‘Publishing your own Linked Data’](link to it)) but will normally perform a lot faster and is accessible to less advanced users via simple HTTP GET requests.

If data is consumed within an organisation and made available externally, the same API should be used in-house, separating application development from serving data and applying any business logic. This approach makes data more portable and ensures consistency of data interpretation (e.g. data precision as a standard number of decimal places) across applications. 

## Standardising data formats

### Spreadsheet validation

Validators let you check that data conforms to a given schema. For spreadsheet data in CSV format there are two popular validators: the LGA’s [CSV Validator](http://validator.opendata.esd.org.uk/) and the ODI’s [CSV Lint](http://csvlint.io/).

iStandUK’s ‘[How to check that a Brownfield Land Register csv file is valid](http://istanduk.org/wp-content/uploads/2017/08/HowtocheckthataBrownfieldLandRegisterCsvFileisValid-v1-2.pdf)’ document describes how to use each of these tools for data that should conform to the [Brownfield Land 2017 schema](http://schemas.opendata.esd.org.uk/Brownfield).

#### Data validator

The LGA’s Validator uses a schema itself defined in CSV format. You can see the CSV schema for brownfield land data from the ‘[Export schema definition to csv](http://validator.opendata.esd.org.uk/schema/export?schemaIdentifier=BrownfieldLandRegister2017&majorVersion=1)’ link on the validator’s [Brownfield Land page](http://validator.opendata.esd.org.uk/brownfieldlandregister2017). Schemas such as this are defined by [CSV Schema schema](http://validator.opendata.esd.org.uk/csvschema) (!) which is used to validate new schemas added by authorised schema authors.

The validator checks data at a given URL or in an uploaded file and reports any non-compliance with the schema. Where a field is optional, you can tell the validator to look for a corresponding column in the CSV or not.

It offers these options for validation.

* Show detailed results – for error reporting on every row rather than just a summary of errors encountered. The option can be switched off for early testing of large files which might repeat the same error on every row.

* Allow additional columns – to say whether columns in addition to those required by the schema should be allowed or should report as errors.

* Check column order – to report where columns are not in the order given by the schema. Column order is not important if data consumers simply use the column headings to identify fields.

Validator is designed to help adoption of schemas by providing auto-generated documentation of them from their CSV definitions and by outputting an empty CSV template to show precisely what columns are expected.

The ‘Create validation file’ option generates the schema in JSON Table format. That schema can be used in CSV Lint.

The validator groups fields by ‘Requirement’, which meets two purposes. Firstly, it defines a requirement for data that can be met by different fields in different circumstances. For example, the [validation against the spend schema](http://validator.opendata.esd.org.uk/spend) matches the requirement of the English [Local Government Transparency Code](https://www.gov.uk/government/publications/local-government-transparency-code-2015) to categorise a merchant from one (or more) of a selection of classification schemes. The publisher picks the scheme(s) to be used and validates against those. Secondly, "requirement" is used to group columns relating to the same thing, such as a local authority’s URI and its name. 

#### CSV Lint

[CSV Lint](http://csvlint.io/) validates CSV data at a given URL or in an uploaded file to check that it conforms with the rules for CSV format data. Additionally, it checks compliance with a schema if that is provided in the [JSON Table Schema](http://dataprotocols.org/json-table-schema/) format.

CSV Lint requires columns to be in the order given by the schema and does not allow any additional columns.

Neither the LGA’s Validator or CSV Lint currently supports validation of spreadsheets defined according to the ‘[CSV on the web](https://www.w3.org/TR/tabular-data-primer/#documenting-csvs)’ W3C recommendation.

### Validating other data formats

Programming frameworks such as those for C# or Java will typically include parsers that check XML or JSON is well formed – for instance that tags are properly nested and closed. If an XML reader is associated with an XSD schema, the XML can be validated against that schema, as [explained here](https://stackoverflow.com/questions/751511/validating-an-xml-against-referenced-xsd-in-c-sharp). Online validators such as the [Free Formatter XML validator](https://www.freeformatter.com/xml-validator-xsd.html) are built from such code.

The commercial tool [XML Spy](https://www.altova.com/xmlspy-xml-editor) lets you create and edit XML schemas and validate XML data against them.

[JSON Lint](https://jsonlint.com/) is a simple online JSON validator. The [Java JSON Schema validator](https://github.com/java-json-tools/json-schema-validator) is deployed in an [online validator from herokuapp.com](https://json-schema-validator.herokuapp.com/). [NewtonSoft](https://www.newtonsoft.com/json/help/html/JsonSchema.htm) provides .NET tools for validating JSON against a JSON schema. [This page provides a list of JSON schema validators](http://json-schema.org/implementations.html#validators).

For Linked Data there is an [RDF shape validator from](http://rdfshape.herokuapp.com/) the WESO Research Group.

### Data harvesting and aggregation

Data can be read from one or more sources (i.e. ‘harvested’) by reference tocatalogues of datasets, by reading APIs or via web scraping. A harvester can read RSS feeds or modified dates and times to identify new and changed data or simply harvest everything before looking for changes or overwriting prior harvested data.

The LGA’s [Inventory harvestor page](http://inventories.opendata.esd.org.uk/harvesters) shows addresses from which it harvests catalogues with different publishers’ dataset information. Likewise, Data.gov.uk’s ‘[Harvesting sources’ page](https://data.gov.uk/harvest) shows where it harvests dataset information via inventories and other standardised data catalogues. The LGA also harvests CSV data that has been registered with data.gov.uk as conforming to a specific schema. For example, [this page](http://datasets.opendata.esd.org.uk/?schema=98) shows harvested datasets that conform to the Brownfield Land schema.

Once dataset metadata has been harvested, links to renditions of data can be used to read the actual data. If the metadata gives the schema to which a dataset conforms, it should be possible to interpret harvested data and load it into a database. Multiple datasets can be aggregated from different sources in a single database so long as each record can be uniquely identified. The unique key to a record will normally comprise

* one or more fields in a dataset that constitute its local primary key,

* an identifier for the publisher, and

* a version number or modified date/time that can be used to distinguish different versions of the same record over time.

The LGA’s [Open Data Aggregator](http://aggregator.opendata.esd.org.uk/) aggregates CSV data read from all harvested links to CSV datasets for a given schema. For example, [the aggregator for the LGA’s public toilets schema](http://aggregator.opendata.esd.org.uk/details?&schemaURI=http%3a%2f%2fschemas.opendata.esd.org.uk%2fPublicToilets) combines data from [the 96 local authority CSV datasets](http://datasets.opendata.esd.org.uk/?schema=4) recorded as conforming to that schema.

There are a few points to note about the aggregator.

* It does not check conformance of the published CSV to the schema, it relies on the publisher having said it conforms.

* The aggregated data includes, by default, all columns in the schema *plus *any extra columns that individual publishers have chosen to add. The aggregator web page lets you deselect columns you don’t want in the aggregated dataset.

* The [developers page](http://aggregator.opendata.esd.org.uk/developers) lets you generate API calls to take the data, which can be paginated for large numbers of records.

Data in spreadsheets that conform to the same schema can simply be added together to form one long spreadsheet.

The aggregator is used by data consumers for applications covering data from many sources. Once example is the [Great British Toilet Map](https://greatbritishpublictoiletmap.rca.ac.uk/) which draws on the full aggregated dataset for public toilets.