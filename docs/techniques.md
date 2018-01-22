# Techniques

## Semantics and data properties

### Metadata

Metadata is the data that describes a dataset rather than the actual data being published. In practice the distinction is not always clear and a rich schema may define properties that both describe and form part of the data.

Metadata will describe the subject matter, status, ownership, format and quality of a dataset. The Open Knowledge Foundation's [Linked Open Vocabularies (LOV)](http://lov.okfn.org/dataset/lov/) page shows popular vocabularies from which metadata properties can be drawn. Use this resource to identify the most common definitions of properties you wish to publish and to consider what metadata meets your users' needs.

You should use properties from these vocabularies where they match you own requirements so that naming is familiar to users, properties are precisely defined in human and machine readable formats, and metadata data can be compared and combined with metadata from elsewhere. 

!> If a property does not exist in an established vocabulary, you can define your own. Ideally you should define it as Linked Data with its own URI. Be clear of responsibility and that they may be superseded.

Even if you don't use Linked Data to describe your metadata or even make it available in a machine readable format, try to use the same terminology as common established vocabularies.

The vocabularies most useful for metadata are:

* Dublin Core Terms ([`dct`](http://dublincore.org/documents/dcmi-terms)) – for basic descriptive properties and ones describing the roles of organisations or people;

* Simple Knowledge Organisation System ([`skos`](http://www.w3.org/2004/02/skos/core)) – for properties describing taxonomies, also known as concept schemes (i.e. lists of intangible things);

* Data Catalogue ([`dcat`](http://www.w3.org/TR/vocab-dcat/)) – for properties defining published datasets;

* Resource Description Framework ([`rdf`](https://www.w3.org/TR/rdf11-concepts/)) – for base properties from which others are derived; and

* Electronic Service Delivery ([`esd`](http://def.esd.org.uk/)) – defined terms used in UK local government that are recommended in ['Designing URI sets for the UK public sector'](https://www.gov.uk/government/publications/designing-uri-sets-for-the-uk-public-sector) but not defined in any other mainstream vocabulary.

#### Identifiers

Identifiers normally comprise a base (or stub) web address and an alpha-numeric identifier. For example the UK's Office for National Statistics (ONS) identifier for England is `E92000001`. The base address is `http://statistics.data.gov.uk/id/statistical-geography/`, which denotes the type of item identified – in this case a statistical geography. Joining the identifier to the stub creates a Unique Resource Identifier (URI), a globally unique identifier that can be dereferenced over the web, e.g. [`http://statistics.data.gov.uk/id/statistical-geography/E92000001`](http://statistics.data.gov.uk/id/statistical-geography/E92000001). This would be assigned to the [`dct:identifier`](http://dublincore.org/documents/dcmi-terms/#terms-identifier) property  . 

Sometimes the base address is removed from identifiers to make data more human readable. In such cases an abbreviation for the base address is defined elsewhere as a Compact URI (CURIE), also known as a namespace. For example `stat` could be a CURIE for `http://statistics.data.gov.uk/id/statistical-geography/`, so the URI would be expressed as `stat.E92000001`. In spreadsheet data, a column heading can be associated with a CURIE to abbreviate URIs given in each row of data. Alternatively the base web address and identifiers can be expressed as separate alternate or additional columns.

!> The alphanumeric identifier is unique within the the base address. Avoid putting any meaning into an identifier such that it might become invalid if the thing identified changed.

#### Important metadata properties

Consider using each of these properties in a standard that defines a dataset.

**Subject matter**

* [`skos:prefLabel`](http://www.w3.org/2004/02/skos/core#prefLabel) – the preferred label or name. Alternatively you may use [`dct:title`](http://dublincore.org/documents/dcmi-terms/#terms-title).

* [`skos:altLabel`](https://www.w3.org/2009/08/skos-reference/skos.html#altLabel) – other names by which the dataset might be known. This helps search engines find it. Alternatively you may use [`dct:alternative`](http://dublincore.org/documents/dcmi-terms/#terms-alternative).

* [`dct:description`](http://dublincore.org/documents/dcmi-terms/#terms-description) – free text description.

* [`dct:spatial`](http://dublincore.org/documents/dcmi-terms/#terms-spatial) – the geographical area covered by the data.

**Status**

* [`dct:created`](http://dublincore.org/documents/dcmi-terms/#terms-created) – the date of creation.

* [`dct:modified`](http://dublincore.org/documents/dcmi-terms/#terms-modified) – the date changed. This is usually limited to the date of the last change.

!> Created and modified dates (or dates and times) can apply to a whole dataset and to individual items of data.</br>
</br>You may wish to add version and status properties within the context of your use case, e.g. `version: 0.01, status: for review by project team`. After the review it would be become `version 1.00, status: accepted by standards body`.

**Ownership**

* [`dct:creator`](http://dublincore.org/documents/dcmi-terms/#terms-creator) – organisation, role or person responsible for creating.

* [`dct:publisher`](http://dublincore.org/documents/dcmi-terms/#terms-publisher) – organisation, role or person responsible for publishing and so normally taking responsibility for content subject to stated quality criteria.

* [`dct:rights`](http://dublincore.org/documents/dcmi-terms/#terms-rights) – a statement about property rights indicating who is entitled to use the dataset and any attribution required. 

* [`dct:license`](http://dublincore.org/documents/dcmi-terms/#terms-license) – a legal document giving permission to use the dataset. The UK [Open Government Licence](http://reference.data.gov.uk/id/open-government-licence) is a suitable value for open datasets which can be used for commercial purposes.

**Format**

* [`dct:conformsTo`](http://dublincore.org/documents/dcmi-terms/#terms-conformsTo) – standard to which the dataset conforms, ideally this should be the URI of the data schema. For data that corresponds with a pre-existing structure defined in Linked Data, use [`rdf:type`](https://www.w3.org/1999/02/22-rdf-syntax-ns#type).

* [`dct:format`](http://dublincore.org/documents/dcmi-terms/#elements-format) – the format of the dataset.

!> The format properties refer to a rendering of a dataset. The native format may be different for different publishers and different from the format in which data is interchanged. A data structure described as a class model (see [Class models](#class-models)) may be expressed differently in different formats, each with its own schema, as given by the `conformsTo` property.

**Quality** 

* [`esd:accuracy`](http://def.esd.org.uk/accuracy) – a statement of how closely the data can be expected to reflect objective facts.

* [`dct:audience`](http://dublincore.org/documents/dcmi-terms/#terms-audience) – the intended consumers of the data.This is not supposed to limit its use, but it gives an indication as to relevant the data might be to a particular need.

* [`esd:intendedLongevity`](http://def.esd.org.uk/intendedLongevity) – for how long you might expect the dataset to be made available and to be maintained.

* [`esd:timeliness`](http://def.esd.org.uk/timeliness) – how up-to-date the dataset is expected to be.

* [`dct:provenance`](http://dublincore.org/documents/dcmi-terms/#terms-provenance) – where the data comes from and any changes in creation and ownership over time that might affect its quality.

* [`dct:source`](http://dublincore.org/documents/dcmi-terms/#terms-source) – a source from which the data is derived. This may be used if a dataset contains values generated by processing of data sourced from another dataset.

!> Quality data is often subjective and can represent intentions or firm commitments. It is important in helping potential users for a view as to how much they might rely on data for a use case.

The above properties are described in the UK Government's document ['Designing URI sets for the UK public sector'](https://www.gov.uk/government/publications/designing-uri-sets-for-the-uk-public-sector) and suggested in the W3C Web Best Practices Working Group wiki [Quality and Granularity Description Vocabulary](https://www.w3.org/2013/dwbp/wiki/Quality_and_Granularity_Description_Vocabulary) page.

?> The [Local Government Service List metadata properties](http://standards.esd.org.uk/?uri=list/englishAndWelshServices&tab=linked) draw on the vocabularies described above. Pre-existing quality properties were used where possible. Properties for accuracy, intended longevity and timeliness did not exist, however, so these were created and can now be used by others.

### Statistical data

Statistical data can often be expressed in a multi-dimensional model where each data point is represented by a value (typically a number or a category) that has a number of properties which can be grouped in dimensions. The Statistical Data and Metadata eXchange (SDMX) provides a generic standard for exchanging statistical data. 

[W3C's Data Cube Vocabulary](https://www.w3.org/TR/vocab-data-cube/) provides a vocabulary for expressing statistics according to SDMX. 

<!--
**[IN OUR EXPERIENCE.]** 

Because SDMX is so generic, the LGA chose a model with three fixed dimensions that always apply to the metrics data that drives its reporting tool.

The LGA’s [LG Inform Plus](http://lginformplus.local.gov.uk) (formerly esd-toolkit) database holds statistics that are useful to local authorities wishing to compare performance and demographics with other authorities and between small areas within their own boundaries. Such data allows them to see how effective they are and to target services (such as those to improve public health) at relevant people rather than using a scatter-gun approach.

The data is an amalgamation of public data from disparate national sources supplemented by data gathered locally. A standard way of structuring the data is needed to overcome differences in how it is represented by the many source organisations (e.g. Office of National Statistics, Department for Education, Public Health England). 

The standard was defined by analysing data from various sources, which is normally presented in spreadsheets or via application programming interfaces (APIs). We also looked at the database structure of existing data reporting tools, including the Audit Commission’s Value for Money tool.

In abstract terms, each data point is represented by a value (typically a number or a category) that has a number of properties which can be grouped in dimensions. The Statistical Data and Metadata eXchange (SDMX) provides a generic standard for exchanging statistical data. Because of a lack of familiarity with SDMX, because others had not used it and because it is so generic, we chose a model with three fixed dimensions that always apply to the data. 

 These dimensions are

* area,

* time period, and

* metric (or indicator) type.

An individual data item has a precise value for each of these dimensions. For example, a single bicycle theft has a count of one with a specific date and time, a point on the map and a metric type denoting bicycle theft. But much data is only available at an aggregated level, so data might contain a count of thefts in general within an area (e.g. a police neighbourhood) over a time period (e.g. a calendar month).

The data structure therefore needs to record data at the most detailed level at which it is available and needed. Aggregations over longer time periods, bigger areas and broader metric types may be generated on the fly (as in a spreadsheet’s pivot table) or aggregated in batch and stored for future reference.

Let’s look at the three dimensions in more detail.

Area** **has an area type which is a point (as given by *x* and *y* map co-ordinates) or a named polygon. Hierarchies of areas define how data can be aggregated up from small to larger areas. Here is an example of a hierarchy of area types used from official statistics in England (from large to small).

* [Country](http://neighbourhoods.esd.org.uk/#?areaType=Country&tab=ViewAreaType)

* [Region](http://neighbourhoods.esd.org.uk/#?areaType=Region&tab=ViewAreaType)

* [Fire authority](http://neighbourhoods.esd.org.uk/#?areaType=FireAuthority&tab=ViewAreaType)

* [County](http://neighbourhoods.esd.org.uk/#?areaType=County&tab=ViewAreaType)

* [District](http://neighbourhoods.esd.org.uk/#?areaType=District&tab=ViewAreaType)

* [Medium level super output area](http://neighbourhoods.esd.org.uk/#?areaType=MLSOA&tab=ViewAreaType) (MSOA)

* [Lower level super output area](http://neighbourhoods.esd.org.uk/#?areaType=LLSOA&tab=ViewAreaType) (LSOA)

* [Output area](http://neighbourhoods.esd.org.uk/#?areaType=OutputArea&tab=ViewAreaType)

Links from the above area types are to the LGA’s Natural Neighbourhoods area type page which shows parent and child area types and ‘same as’ relationships for equivalent area type definitions elsewhere. 

Area types can be polyhierarchical, e.g. a district is broken down by both MSOAs and wards, and sometimes the fit of areas within their parent is only approximate, in which case a measure of degree of fit can be useful.

Where data describes an area, care is needed to avoid double counting across overlapping areas, e.g. adding the population of a county to that the districts it contains. However, sometimes an area is used as a proxy for the organisation governing it. In theses cases data pertaining to the organisations can be added. For example, spending on roads by a local authority and spending by the Highways Agency in the same area should be totalled to get overall spending on roads.

Time period** **has a time period type such as calendar month, calendar year, financial year, academic year, etc.. Metrics values may be aggregated over a time period, e.g. all crimes in a month, or represent a count at a point in time that is sampled for each time period, e.g. population for a census year. The former can be aggregated over time, e.g. add the crimes in each month to get the year’s crime figures; the latter cannot.

Metric type is a broad definition of what the statistics define. Hierarchies of metric type can be defined in the same way as hierarchies of areas can. For example, crime can be defined from broad to narrow as

* [overall crime](http://id.esd.org.uk/metricType/1068),

* [theft crime](http://id.esd.org.uk/metricType/3813), and

* [bicycle theft](http://id.esd.org.uk/metricType/4536).

Sometimes metric types break down in multiple ways. For example, employment data can be defined by

* [employment contract type](http://id.esd.org.uk/circumstanceCollection/Workcontract) (part-time, full-time, etc.),

* [working hours](http://id.esd.org.uk/circumstanceCollection/WorkingHours) (temporary, permanent, etc.), and

* employee [gender](http://id.esd.org.uk/circumstanceCollection/Gender) (female, male, etc.).

Detailed metric types, such as the [number of female part-time employees who are temporary](http://id.esd.org.uk/metricType/579), define figures which can be aggregated to derive different summaries according to how metric types are related.

Relationships between metric types are given by the circumstances they define, such as [employment contract type](http://id.esd.org.uk/circumstanceCollection/Workcontract), [working hours](http://id.esd.org.uk/circumstanceCollection/WorkingHours) and [gender](http://id.esd.org.uk/circumstanceCollection/Gender), as detailed above. By standardising these in a [circumstance types list](http://id.esd.org.uk/list/circumstances) according to standard rules for taxonomies, we can relate metrics from different sources that use the same breakdowns and hence analyse for patterns in the data.

The structure described above allows for data items (i.e. metric values) to be queried by

* area or a group of areas (e.g. all wards in a district),

* time period or a groups of time periods (e.g. the last twelve months), and

* metric type or a group of metric types (e.g. all metric types in the dimension defined by the crime types circumstance).

Separate queries on areas, periods and metric types are provided. As well as raw data values, statistical functions are performed (e.g. total, mean, standard deviation thresholds, etc.) for ranges of values, applying rules for what metric values can meaningfully be aggregated over time and area.**[IN OUR EXPERIENCE ENDS.]**

-->


<div class="warn">
    <p>Because SDMX is so generic, the LGA chose a model with three fixed dimensions that always apply to the metrics data that
        drives its reporting tool.</p>
    <p>The LGA's
        <a href="http://lginformplus.local.gov.uk" target="_blank">LG Inform Plus</a> (formerly esd-toolkit) database holds statistics that are useful to local authorities wishing
        to compare performance and demographics with other authorities and between small areas within their own boundaries.
        Such data allows them to see how effective they are and to target services (such as those to improve public health)
        at relevant people rather than using a scatter-gun approach.</p>
    <p>The data is an amalgamation of public data from disparate national sources supplemented by data gathered locally. A standard
        way of structuring the data is needed to overcome differences in how it is represented by the many source organisations
        (e.g. ONS, Department for Education, Public Health England). </p>
    <p>The standard was defined by analysing data from various sources, which is normally presented in spreadsheets or via application
        programming interfaces (APIs). We also looked at the database structure of existing data reporting tools, including
        the Audit Commission's Value for Money tool.</p>
    <p>In abstract terms, each data point is represented by a value (typically a number or a category) that has a number of
        properties which can be grouped in dimensions. The Statistical Data and Metadata eXchange (SDMX) provides a generic
        standard for exchanging statistical data. Because of a lack of familiarity with SDMX, because others had not used
        it and because it is so generic, we chose a model with three fixed dimensions that always apply to the data. </p>
    <p>
    <img src="/images/dimensions.png" title="dimensions example" alt="dimensions example" class="half-right" />
    These dimensions are</p>
    <ul class="half-left">
        <li>
            <p>area,</p>
        </li>
        <li>
            <p>time period, and</p>
        </li>
        <li>
            <p>metric (or indicator) type.</p>
        </li>
    </ul>
    <p class="text-justify">An individual data item has a precise value for each of these dimensions. For example, a single bicycle theft has a count
        of one with a specific date and time, a point on the map and a metric type denoting bicycle theft. But much data
        is only available at an aggregated level, so data might contain a count of thefts in general within an area (e.g.
        a police neighbourhood) over a time period (e.g. a calendar month).</p>
        
    <p>The data structure therefore needs to record data at the most detailed level at which it is available and needed. Aggregations
        over longer time periods, bigger areas and broader metric types may be generated on the fly (as in a spreadsheet's
        pivot table) or aggregated in batch and stored for future reference.</p>
    <p>Let's look at the three dimensions in more detail.</p>
    <p>Area
        <strong> </strong>has an area type which is a point (as given by
        <em>x</em> and
        <em>y</em> map co-ordinates) or a named polygon. Hierarchies of areas define how data can be aggregated up from small
        to larger areas. Here is an example of a hierarchy of area types used from official statistics in England (from large
        to small).</p>
    <ul>
        <li>
            <p>
                <a href="http://neighbourhoods.esd.org.uk/#?areaType=Country&amp;tab=ViewAreaType" target="_blank">Country</a>
            </p>
        </li>
        <li>
            <p>
                <a href="http://neighbourhoods.esd.org.uk/#?areaType=Region&amp;tab=ViewAreaType" target="_blank">Region</a>
            </p>
        </li>
        <li>
            <p>
                <a href="http://neighbourhoods.esd.org.uk/#?areaType=FireAuthority&amp;tab=ViewAreaType" target="_blank">Fire authority</a>
            </p>
        </li>
        <li>
            <p>
                <a href="http://neighbourhoods.esd.org.uk/#?areaType=County&amp;tab=ViewAreaType" target="_blank">County</a>
            </p>
        </li>
        <li>
            <p>
                <a href="http://neighbourhoods.esd.org.uk/#?areaType=District&amp;tab=ViewAreaType" target="_blank">District</a>
            </p>
        </li>
        <li>
            <p>
                <a href="http://neighbourhoods.esd.org.uk/#?areaType=MLSOA&amp;tab=ViewAreaType" target="_blank">Medium level super output area</a> (MSOA)</p>
        </li>
        <li>
            <p>
                <a href="http://neighbourhoods.esd.org.uk/#?areaType=LLSOA&amp;tab=ViewAreaType" target="_blank">Lower level super output area</a> (LSOA)</p>
        </li>
        <li>
            <p>
                <a href="http://neighbourhoods.esd.org.uk/#?areaType=OutputArea&amp;tab=ViewAreaType" target="_blank">Output area</a>
            </p>
        </li>
    </ul>
    <p>Links from the above area types are to the LGA's Natural Neighbourhoods area type page which shows parent and child area
        types and 'same as' relationships for equivalent area type definitions elsewhere. </p>
    <p>Area types can be polyhierarchical, e.g. a district is broken down by both MSOAs and wards, and sometimes the fit of
        areas within their parent is only approximate, in which case a measure of degree of fit can be useful.</p>
    <p>Where data describes an area, care is needed to avoid double counting across overlapping areas, e.g. adding the population
        of a county to that the districts it contains. However, sometimes an area is used as a proxy for the organisation
        governing it. In theses cases data pertaining to the organisations can be added. For example, spending on roads by
        a local authority and spending by the Highways Agency in the same area should be totalled to get overall spending
        on roads.</p>
    <p>Time period
        <strong> </strong>has a time period type such as calendar month, calendar year, financial year, academic year, etc.. Metrics
        values may be aggregated over a time period, e.g. all crimes in a month, or represent a count at a point in time
        that is sampled for each time period, e.g. population for a census year. The former can be aggregated over time,
        e.g. add the crimes in each month to get the year's crime figures; the latter cannot.</p>
    <p>Metric type is a broad definition of what the statistics define. Hierarchies of metric type can be defined in the same
        way as hierarchies of areas can. For example, crime can be defined from broad to narrow as</p>
    <ul>
        <li>
            <p>
                <a href="http://id.esd.org.uk/metricType/1068" target="_blank">overall crime</a>,</p>
        </li>
        <li>
            <p>
                <a href="http://id.esd.org.uk/metricType/3813" target="_blank">theft crime</a>, and</p>
        </li>
        <li>
            <p>
                <a href="http://id.esd.org.uk/metricType/4536" target="_blank">bicycle theft</a>.</p>
        </li>
    </ul>
    <p>Sometimes metric types break down in multiple ways. For example, employment data can be defined by</p>
    <ul>
        <li>
            <p>
                <a href="http://id.esd.org.uk/circumstanceCollection/Workcontract" target="_blank">employment contract type</a> (part-time, full-time, etc.),</p>
        </li>
        <li>
            <p>
                <a href="http://id.esd.org.uk/circumstanceCollection/WorkingHours" target="_blank">working hours</a> (temporary, permanent, etc.), and</p>
        </li>
        <li>
            <p>employee
                <a href="http://id.esd.org.uk/circumstanceCollection/Gender" target="_blank">gender</a> (female, male, etc.).</p>
        </li>
    </ul>
    <p>Detailed metric types, such as the
        <a href="http://id.esd.org.uk/metricType/579" target="_blank">number of female part-time employees who are temporary</a>, define figures which can be aggregated to derive different
        summaries according to how metric types are related.</p>
    <p>Relationships between metric types are given by the circumstances they define, such as
        <a href="http://id.esd.org.uk/circumstanceCollection/Workcontract"
            target="_blank">employment contract type</a>,
        <a href="http://id.esd.org.uk/circumstanceCollection/WorkingHours" target="_blank">working hours</a> and
        <a href="http://id.esd.org.uk/circumstanceCollection/Gender" target="_blank">gender</a>, as detailed above. By standardising these in a
        <a href="http://id.esd.org.uk/list/circumstances" target="_blank">circumstance types list</a> according to standard rules for taxonomies, we can relate metrics from different sources
        that use the same breakdowns and hence analyse for patterns in the data.</p>
    <p>The structure described above allows for data items (i.e. metric values) to be queried by</p>
    <ul>
        <li>
            <p>area or a group of areas (e.g. all wards in a district),</p>
        </li>
        <li>
            <p>time period or a groups of time periods (e.g. the last twelve months), and</p>
        </li>
        <li>
            <p>metric type or a group of metric types (e.g. all metric types in the dimension defined by the crime types circumstance).</p>
        </li>
    </ul>
    <p>Separate queries on areas, periods and metric types are provided. As well as raw data values, statistical functions are
        performed (e.g. total, mean, standard deviation thresholds, etc.) for ranges of values, applying rules for what metric
        values can meaningfully be aggregated over time and area.</p>
</div>


### Geographical data

Data describing an area has little meaning if that area is not precisely defined. The county of Nottinghamshire largely excludes the major town/city of Nottingham – [see comparison](http://neighbourhoods.esd.org.uk/#?areaType=County&area=E10000024&overlayType=TOWNCITY&tab=Map). Town centres within major cities or counties are often not defined in machine readable terms (or in any open way beyond a name).

Unique identifiers – as mentioned in [Important metadata properties](#important-metadata-properties) – are essential to give geographical data meaning. The types of those identifiers show what kind of geographies you are talking about (administrative, statistical, electoral, health, education, parks, etc.). A diagram showing the hierarchy of statistical geographies is available from [ONS Digital](https://digitalblog.ons.gov.uk/2014/08/20/ons-api-understanding-geography/), which makes the complex nature of these levels apparent.

Administrative organisations need to be distinguished from the geographical areas they govern, although it is often correct to assume the spatial coverage of an organisation's data is the area it governs.

If an area changes, for example because of changes enacted by the Local Government Boundary Commission for England ([LGBCE](https://www.lgbce.org.uk/)), it should be assigned a new unique identifier with corresponding boundary. Such changes can make data series hard to monitor over time, but they avoid incorrect comparisons being made over time of areas which might keep the same name but change boundaries. 

Geographies may be defined by sub-dividing statistics. In the UK, the ONS defines output areas ([OAs](http://statistics.data.gov.uk/id/statistical-entity/E00)), which have up to about 150 households, for publishing detailed data. These areas are grouped into super output areas ([LSOAs](http://statistics.data.gov.uk/id/statistical-entity/E01) and [MSOAs](http://statistics.data.gov.uk/id/statistical-entity/E02)) for aggregating statistics. Some data is only published at these higher levels to avoid identifying individuals or households that could be exposed if the data were published at OA-level. The same area groupings are often used for defining the coverage of third party data. 

Understanding the relationships between area types allows aggregation and comparison of data. Areas of one type contain (i.e. are the parents of) or are contained by (i.e. are the children of) areas of another area type The diagram below shows a hierarchy of official UK statistical geographies relevant to local government. (Though it's not a list of all the types of area available, it demonstrates the relationship between geographies.)

<div class="text-center">
    ![geography hierarchy](/images/geography-hierarchy.png)
</div>

Note that the `contains` relationship might not be exact. ONS publishes a best-fit relationship between OAs and electoral wards, indicating the OAs that are mostly contained within electoral geographies.

To be able to identify an area and understand its exact geographical location the following properties need to be defined.

* Identifier/URI

* Label – the name or a label describing the area e.g. Lambeth, Birmingham, Cumbria

* Boundary of the area – typically published in one or more of these digital formats such as Shapefile, KML, GeoJSON, WMS (Web Map Service)

* Parent area(s) of a type which contains the type of the area being defined

* Child area(s) of a type which is contained by the type of the area being defined

If areas are not defined by a reliable third party (such as ONS), you need to define them yourself with, as a minimum, the above properties. This is often the case for organisational sub-divisions within local authorities, such as children's services areas or town centres. It is also the case for 'natural' neighbourhoods, which reflect real-life communities based on geographies that don't conform to official boundaries.

The [Natural Neighbourhoods](http://neighbourhoods.esd.org.uk/) tool, described in [Defining your own areas](tools#defining-your-own-areas), allows anyone to record their own areas as open data and to relate them to other official and unofficial areas.

### URI sets and registers

We need consistent ways of defining identifying the same things referenced in different data sources when they are combined and compared. This is essential to data merged from over 50 publishers in the LG Inform reporting tool and its accompanying API. It also applies to data published according to schemas for local authority spending, election results, brownfield land, etc., where data consumers need to be able to interpret references (or local authorities, parliamentary parties, areas, etc.) and link them to data with the same references in other dataset.

Hence, the UK Government has approved the standard for [persistent resolvable identifiers](https://www.gov.uk/government/publications/open-standards-for-government/persistent-resolvable-identifiers), promoting URLs as identifiers which resolve to pages describing the thing they identify. This is in the same vein as W3C's ['Cool URIs for the Semantic Web'](https://www.w3.org/TR/cooluris/) which describes the URI that uniquely defines something and, in a web browser, resolves to a page which describes that thing. The Government also published the ['Designing URI sets for the UK public sector'](https://www.gov.uk/government/publications/designing-uri-sets-for-the-uk-public-sector) guidance.

 

URIs are fundamental to Linked Data techniques whereby all data is defined by triples of subject-predicate-object (e.g. mySchool-hasCatchmentArea-myVillage). Every subject, predicate (or property) and object is given by a URI or a basic data type (such as text or a number). But even when data is not expressed in [5-star Linked Data](http://5stardata.info/en/) format as triples, URIs are important to provide unambiguous identifiers.

The term 'URI set' defines a collection of identifiers which may be grouped in a register of tangible things (e.g. schools, areas, countries, etc.) or in a concept scheme that defines a taxonomy of abstract concepts. ([URI sets referenced in this document](appendices#referenced-schemas) gives a list of URI sets referenced by English local government.)

Each concept scheme contains a list of concepts, each of which has a URI and is linked to the scheme and other concepts using properties defined by the SKOS standard.

The Natural Neighbourhoods tool assigns a URI to each area type and each area. The URIs resolve in a browser to representations on a map and other tabs of the web page present properties as text and links. 'Same as' relationships link to URIs for the same area types and areas maintained by other organisations, such as ONS URIs from `statistics.gov.uk`.

The UK Government's Government Digital Service (GDS) is introducing [registers](https://registers.cloudapps.digital/registers) for commonly referenced things, such as [English local authorities](https://local-authority-eng.register.gov.uk/) and [countries](https://country.register.gov.uk/). These may not be queried as Linked Data but the registers and each of their entries (e.g. [Birmingham City Council](https://local-authority-eng.register.gov.uk/record/BIR), [The Gambia](https://country.register.gov.uk/record/GM), etc.) has a URI that resolves to a descriptive web page and other formats.

[Schemas referencing specific URI sets](appendices#schemas-referencing-specific-uri-sets) lists schemas developed by co-operation between Porism, the LGA and iStandUK defining formats for open data with fields that must be populated from given URI sets. 

#### URI sets vs. encoded lists

URI sets should be used for lists that are long, likely to change frequently and referenced in multiple datasets that there is potential for linking.

Encoded lists are small lists of terms (e.g. status codes) that are mainly relevant just to one dataset and will not change frequently. Encoded lists can be built into a schema rather than being referenced as an external set (sometimes referred to as a 'scheme').

### Taxonomies

A taxonomy is a list of terms representing concepts which can be used to index information. Where data references taxonomy terms, these can be used to link, sort, group and aggregate data. 

Taxonomies should be defined according to the Simple Knowledge Organization System ([SKOS](https://www.w3.org/TR/skos-reference/)) standard using its properties where appropriate plus others for specialist (domain-specific) properties.

Taxonomies should be of type [`skos:ConceptScheme`](http://www.w3.org/2004/02/skos/core#ConceptScheme) and their items of type [`skos:Concept`](http://www.w3.org/2004/02/skos/core#Concept), or a custom class that is an [`rdfs:subClassOf`](http://www.w3.org/2000/01/rdf-schema#subClassOf) of [`skos:Concept`](http://www.w3.org/2004/02/skos/core#Concept). Similarly the mappings between taxonomies should be direct or sub classes of [`skos:mappingRelation`](https://www.w3.org/2009/08/skos-reference/skos.html#mappingRelation).

A hierarchical taxonomy has terms which are related to each other in parent–child relationships using the [`skos:broader`](http://www.w3.org/2004/02/skos/core#broader) term and [`skos:narrower`](http://www.w3.org/2004/02/skos/core#narrower) properties.

For any taxonomy it is necessary to define the rules for each of the following properties.

* Identifiers, using a unique identifier for each term. IDs can be automatically assigned or assigned by the owner when a term is created. IDs should always be unique to the term within a taxonomy. They should not be ascribed meaning (e.g. be derived from the preferred label) if the definition of the term might change over time.

* Labels, using a meaningful name or label for the term. Preferred labels should be unique to the term within the taxonomy. There should always be a preferred label (in each language used) which is typically used to refer to the term. There may also be alternative labels (or synonyms) which can be used to power searches.

* The number of levels in the hierarchy of a taxonomy. You may just say that a hierarchy can have an indefinite number of levels or you may constrain it for readability or for software applications.

* The levels of granularity. The level of detail in any 'branch' of the hierarchy of a taxonomy. This should be consistent throughout any taxonomy. Where one term in a taxonomy can be broken down into more detail, the taxonomy owner should decide whether to stop at the less detailed term or to add a further level in the taxonomy hierarchy – which may not be used for all terms. The more detailed terms should not be added at the higher level as this would result in an inconsistency in the granularity of the taxonomy.

* Capitalisation of labels. For example, capitalisation of the first letter of any label only except where a term in the label is a proper noun.

* Special characters and numeric characters. Frequently applications which might use the taxonomy cannot deal with special characters, so preferred terms (and alternative terms) should not contain any special characters or punctuation, e.g. &. The character's full word equivalent should be used instead, e.g. and. In an English taxonomy, use of words which originate from languages other than English e.g. *café* can also cause problems when being interpreted. The owner of the taxonomy should decide whether numeric characters are allowed or whether they should be replaced by the full word equivalent e.g. 5-a-side versus five-a-side.

* Whether the taxonomy is mono- or polyhierarchical. A taxonomy is monohierarchical when each term except the top term has one and only one broader term, otherwise the taxonomy is polyhierarchical. 

* Use of subsets. You may define parts of a taxonomy as separate taxonomies in their own right so that only terms relevant to a specific audience need be exposed to that audience. This is achieved simply by defining more than one [`skos:conceptScheme`](http://www.w3.org/2004/02/skos/core#ConceptScheme) and applying the [`skos:inScheme`](https://www.w3.org/2009/08/skos-reference/skos.html#inScheme) property more than once to relevant terms. For example, the [Local Government Services List for England and Wales](http://id.esd.org.uk/list/englishAndWelshServices) is a subset of the wider [Local Government Services List](http://id.esd.org.uk/list/services), which has local government service types shared by many European countries.

## Data structure and formats

### Concept models

A concept is a generalisation of a type of abstract or physical thing, describing its main features. It is less specific than a class although concepts may be viewed as base classes from which more specialised classes are derived.

The British Standards Institute's [Publicly Available Specification (PAS) 182](http://shop.bsigroup.com/pas182) describes the 'Smart city concept model' which gives a set of concepts from which any data model may be constructed. 

<table>
  <tr>
    <td>Name</td>
    <td>Definition</td>
    <td>Sub-concept of</td>
  </tr>
  <tr>
    <td>`ABSTRACT`</td>
    <td>Existing in thought or as an idea but not having a physical existence.</td>
    <td>`ITEM`</td>
  </tr>
  <tr>
    <td>`ACCOUNT`</td>
    <td>A container of information, held by an `AGENT`, in which to record data arising from `EVENT`s that relate to an `ITEM` in a role.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`AGENT`</td>
    <td>An `ITEM`, but most often a `PERSON`, or `ORGANIZATION`, providing a `SERVICE` or taking a role in an `EVENT`.</td>
    <td>`ITEM`</td>
  </tr>
  <tr>
    <td>`AGREEMENT`</td>
    <td>A negotiated arrangement between `AGENT`s as to a course of action.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`ASSUMPTION`</td>
    <td>A predicted or presumed `STATE`.</td>
    <td>`STATE`</td>
  </tr>
  <tr>
    <td>`BUILDING`</td>
    <td>A man-made structure, with a fixed or temporary `PLACE`, intended for sheltering `PERSON`s or other `OBJECT`s.</td>
    <td>`OBJECT`</td>
  </tr>
  <tr>
    <td>`CASE`</td>
    <td>A container for information recording the history of `EVENT`s initiated by a `SERVICE` demand.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`COMMUNITY`</td>
    <td>A group of `PERSON`s and/or `ORGANIZATION`s that share common characteristics such as `PLACE`, circumstance, etc.</td>
    <td>`ITEM`</td>
  </tr>
  <tr>
    <td>`COLLECTION`</td>
    <td>A grouping of `ITEM`s, as defined by an `AGENT`, that needs to be managed, or operated upon together.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`DECISION`</td>
    <td>A conclusion or resolution reached after consideration.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`EVENT`</td>
    <td>An occurrence that has happened or might happen.</td>
    <td> </td>
  </tr>
  <tr>
    <td>`FUNCTION`</td>
    <td>A `COLLECTION` of `SERVICE`s.</td>
    <td>`COLLECTION` </td>
  </tr>
  <tr>
    <td>`ITEM`</td>
    <td>An individual article or unit, especially one that is part of a list, collection, or set.</td>
    <td> </td>
  </tr>
  <tr>
    <td>`METHOD`</td>
    <td>A pre-determined procedure, or series of steps, designed to accomplish an `OBJECTIVE`.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`METRIC`</td>
    <td>A measure of demography, characteristics, activity or performance.</td>
    <td>`STATE`</td>
  </tr>
  <tr>
    <td>`OBJECT`</td>
    <td>A physical `ITEM`.</td>
    <td>`ITEM`</td>
  </tr>
  <tr>
    <td>`OBJECTIVE`</td>
    <td>An achievement desired by an `AGENT`. `ABSTRACT OBSERVATION`. An `EVENT` in which a `STATE` is recorded.</td>
    <td>`EVENT`</td>
  </tr>
  <tr>
    <td>`ORGANIZATION`</td>
    <td>A group of `PERSON`s with a collective goal.</td>
    <td>`AGENT`</td>
  </tr>
  <tr>
    <td>`PERSON`</td>
    <td>An individual human being.</td>
    <td>`AGENT`</td>
  </tr>
  <tr>
    <td>`PLACE`</td>
    <td>A geographic or virtual part of space.</td>
    <td> </td>
  </tr>
  <tr>
    <td>`PLAN`</td>
    <td>A list of steps with times and `RESOURCE`s, used to achieve an `OBJECTIVE`.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`RESOURCE`</td>
    <td>An `ITEM` that can be drawn on by an `AGENT` to produce a benefit.</td>
    <td> </td>
  </tr>
  <tr>
    <td>`RULE`</td>
    <td>An explicit or understood regulation or principle governing conduct or procedure within a particular area of activity.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`SERVICE`</td>
    <td>The capacity to carry out one or more `METHOD`s.</td>
    <td>`ABSTRACT`</td>
  </tr>
  <tr>
    <td>`STATE`</td>
    <td>A circumstance or condition of an `ITEM` at a time.</td>
    <td> </td>
  </tr>
  <tr>
    <td>`TARGET`</td>
    <td>A desired `STATE`.</td>
    <td>`STATE`</td>
  </tr>
</table>


By building data classes based on these concepts, participants in a 'smart city' or any community with multiple consumers of inter-related data, can meaningfully link their datasets.

The PAS describes relationships between the concepts it defines and so it gives the relationships one might expect or require between classes which are based on specific concepts.

For example, a `case` such as a building inspection might form part of a building permit `service` with a site inspection `event` as part of the `case`'s `plan`. The relationships are illustrated in the concept model's relationships diagram shown below.

<div class="text-center">
    ![concept model](/images/concept-model.png)
</div>

The distinctions are important in defining clean data models that avoid conflating physical things with the role they play in a transaction. So, for example, a `person` or an `organization` may act as a customer *or* a service provider (or both in different agreements).

?> A common confusion in local government is between a local authority, which is an `organization`, and the `place` it [`governs`](http://opendatacommunities.org/def/local-government/governs). So, for example, the `organisation` [Hampshire County Council](http://opendatacommunities.org/id/county-council/hampshire) governs the `place` [Hampshire](http://data.ordnancesurvey.co.uk/id/7000000000017765). If you design a dataset that will reference 'Hampshire', you need to be explicit as to where you're referencing: the organisation or the place.

In practice it is subjective as to how a concept model is broken down and the Smart Cities model is just one example. However, it is important to have a common understanding of basic concepts between the parties likely to be involved in sharing data within a particular community (defined as a group with common characteristics). 

### Class models 

When the general concepts that make up a data model have been defined, we move on to specific classes which give a precise definition of the data structure being represented, irrespective of the format in which it is stored or interchanged.

A Unified Modelling Language (UML) class diagram provides a diagrammatic way of representing a data structure with ambiguous relationships between classes. An entity relation diagram (ERD) for a relational database performs a similar function and the metadata of a Structured Query Language (SQL) database expresses the database structure.

When the class model for data is explicit, it is a straightforward mechanistic job to express the data in a particular format such as comma separated values (CSV)  or eXtensible Markup Language (XML). The class model disambiguates the structure, making it easier to convert from one format to another, to express via an API or to populate a database (see [Data formats](#data-formats)).


<div class="warn">

As part of a project to standardise elections data, the emerging [Election Results schema](http://schemas.opendata.esd.org.uk/ElectionResults) has been developed. It is expressed as a schema for comma separated values (CSV) format data used for spreadsheet data. Implicit in the design is a class model, without which rules for cardinality could not be given and it would not be clear when data must be repeated between rows or split into multiple values in one cell.

The simplified class model can be expressed as three main classes.
<br />
<br />

    <table>
        <tr>
            <td>Class</td>
            <td>Properties</td>
        </tr>
        <tr>
            <td>Election</td>
            <td>
                Date<br />
                Organisation (f)<br />
                Elected body (f)<br />
                Contact information
            </td>
        </tr>
        <tr>
            <td>Election area</td>
            <td>
                Election<br />
                Area (f)<br />
                Returning officer<br />
                Rejected ballots
            </td>
        </tr>
        <tr>
            <td>Candidate</td>
            <td>
                Election area<br />
                Candidate name<br />
                Candidate description<br />
                Political party (f)<br />
                Votes won<br />
                Elected or not
            </td>
        </tr>
    </table>


(f), used to represent 'foreign key' in a relational database, here indicates that a property of the class relates to an externally maintained class for which a URI set or register might be maintained.<br /><br />

<ul>
    <li>Organisation is a local, national or transnational organisation that governs an area, e.g. London Borough of Lambeth.</li>
    <li>Elected body is taken from a list of types of governed area, e.g. London borough.</li>
    <li>Area is the geospatial area for which the election is being held, e.g. E09000022.</li>
    <li>Political party gives the political affiliation of a candidate which, in the UK, will correspond with a party registered with the Electoral Commission.</li>
</ul>
</div>

If a reliable source can be used to maintain data on these external classes, it is sufficient to just reference them rather than manage within the data structure, data which is not fundamental to its function. For example, an elections database would not normally hold the polygons of the election areas but just reference them elsewhere.

The classes defined specifically for a dataset need to be expressed unambiguously as do references to external classes, whether by their URIs or by other means.

### Data formats

When the data structure is precisely defined, the data itself can be rendered in a variety of machine readable formats. Choice of format can be a trade-off between simplicity and richness of data. Different types of machine readable schema are used for different formats. Some types of schema offer more sophisticated rules than others. Sometimes the data structure is not apparent from a rendering and you need to go back to the class model to understand how it should be interpreted.

The following sections describe common data formats and schemas that can be used to validate data in those formats.

#### Spreadsheet

Spreadsheets represent data in a tabular format with rows and columns. The first row identifies the type of data expected in each column. Subsequent rows show actual records of data. 

Comma separated values (CSV) is the most common non-proprietary way of representing spreadsheet data. CSV separates values for each column with a comma and separates rows with a carriage return and line feed. Alternatives to CSV use other characters as separators or make columns a fixed width and use no separators. The tab separated values (TSV) format can be used in place of CSV where values themselves contain commas. However, CSV does offer ways of dealing with commas within values and is widely understood, so if an alternative format is not already used for your data, CSV is probably the best to use.

Proprietary formats include those used by Microsoft Excel, Google Sheets and other spreadsheet tools. These tools normally provide a means of working with the CSV format, although they can transform data in a way that a plain text editor would not.

Use CSV to interchange spreadsheet data unless you have special reasons to use another format. CSV can be populated without proprietary tools and can be validated by several freely available validators.

Spreadsheets are easy for people to understand and spreadsheet tools allow people who are not data-querying specialists to use simple tools to examine data. The tabular format does mean that complex data structures have to be simplified or you need rules for interpreting them. For example, elections data that takes a row per candidate in each election cannot show extra election data, like the number of spoilt ballots, without including extra rows that don't belong to specific candidates. Anyone reading the data needs to understand the data model which states that different rows represent different classes. 

<table>
  <tr>
    <td>ElectionDate</td>
    <td>ElectoralAreaLabel</td>
    <td>CandidateSurname</td>
    <td>VotesWon</td>
    <td>BallotsRejectedUnmarked </td>
  </tr>
  <tr>
    <td>2017-05-04</td>
    <td>Abbey ward</td>
    <td>Jones</td>
    <td>1234</td>
    <td>12</td>
  </tr>
  <tr>
    <td>2017-05-04</td>
    <td>Abbey ward</td>
    <td>Patel</td>
    <td>2345</td>
    <td>12</td>
  </tr>
  <tr>
    <td>2017-05-04</td>
    <td>Abbey ward</td>
    <td>Smith</td>
    <td>5678</td>
    <td>12</td>
  </tr>
</table>


*Example of spreadsheet data with one row per candidate and a column for spoilt ballots that applies to the whole election and so all rows (see below how this might be expressed better in XML or JSON)*

When expressing data in a spreadsheet, you need to decide where multiple values are expressed by repeating rows and where they are expressed by multiple values within a single cell using a different delimiter such as the pipe symbol (|). Again the full data model has to be documented to be able to interpret the rows and cells.

The LGA's [CSV Validator](http://validator.opendata.esd.org.uk/) and ODI's [CSV Lint](http://csvlint.io/) validate that CSV data is well formed and complies with a specified schema. CSV Lint's [guidance](http://csvlint.io/about) provides rules for well formed CSVs. CSV schemas can be defined using the [JSON Table schema](https://specs.frictionlessdata.io/table-schema/) format or the CSV format used by the validator. Both are summarised below. The W3C [CSV on the Web](https://www.w3.org/TR/tabular-data-primer/#tabular-data) Recommendation describes a richer way of describing metadata for CSV.

#### eXtensible Markup Language (XML)

XML is a meta language, used for defining other languages such as xHTML and KML as well as structured data. XML Schema Definition (XSD) is a language, itself written in XML, for validating XML.

Data represented in XML format can be much richer than spreadsheet data, it can closely match the data structure and so it's more easily self-documenting, rather than relying on reference to a separate description of the structure; it can include metadata. It can include encoding schemas of valid terms and reference external vocabularies via namespaces that point to their full online definitions.

<format-sample tab="xml" :hidden-tabs="['json']"></format-sample>

*Example of simplified XML data for election for candidates and spoilt ballots. Click the CSV tab to see the difference between CSV and XML formats*

Business rules can also be built into an XML schema, for example, if one field has a null value a different field cannot have a null value. XML is a popular format with organisations transferring rich data between data-driven applications, such as those for processing benefits in local and national government.

#### JavaScript Object Notation (JSON)

JSON is a format used for describing data and other formats such as the [JSON table schema](http://specs.frictionlessdata.io/table-schema/) for defining spreadsheet data. JSON is described as a 'lightweight' format. It uses a simple notation to represent rich data structures with string, null, boolean and numeric values, nested elements and arrays. [JSON Schema](http://json-schema.org/) is a language, itself written in JSON, for validating JSON.

<format-sample tab="json"></format-sample>

*Example of simplified JSON data for election for candidates and spoilt ballots. Click the tabs to see the difference between CSV, XML and JSON formats* 

JSON data is popular with web programmers because it can be manipulated quickly by web browsers and server-side tools.

#### Linked Data

Linked Data provides the most flexible way of expressing data. It does so at the expense of simplicity to process and validate.

At the heart of Linked Data is the 'semantic triple' whereby every piece of data is expressed using the simple subject-predicate-object expression. Here are two examples.

<div class="text-center">
![triples example](/images/triples-example.png)
</div>

Every subject (e.g. `election`), predicate (e.g. `hasCandidate`, `hasSpoiltBallot`) and object (e.g. `candidate`, `53`) is represented by a URI or a literal value of a base type such as an integer or a string. By querying each linked URI in turn you can explore the data and understand how it relates to other Linked Data on the web. 

The [Local Government Business Model](http://standards.esd.org.uk/LGBM) shows relationships between types of concept (service type, function type, circumstances, etc.) defined by the LGA as a family of taxonomies (see [Taxonomies](#taxonomies)).

A set of linked triples defining some data is known as a 'data graph'. The SPARQL RDF query language lets you extract data for defined graphs to bring together elements of Linked Data in one result set.

In theory, a SPARQL query can be run across multiple web sites such that the whole web can be treated as one database. In practice, however, SPARQL can be slow for high volume data processing and queries are normally run on local dumps taken from external triple stores rather than querying over the web.

Nevertheless, Linked Data presents two important principles that can be built into open data in general.

1. Use URIs (or other dereferencable identifiers) to give precise human and machine readable definitions from which further information can be gleaned.

2. Publish data over which you have control and just link to related data managed by a reliable third party.

The Shapes Constraint Language (SHACL) can be used to define a kind-of schema which checks that data graphs meet certain conditions.

Linked Data techniques can be applied to data whose structure is fluid and perhaps inconsistent between data items. A formal data structure does not need to be defined up-front. SPARQL provides a very quick and easy way to allow third parties to access your data without requiring a large investment in writing an API.

!> Use Linked Data with a SPARQL endpoint to expose data of an inconsistent structure (e.g. sections of legislation and the official organisations and roles to which it refers) which someone might want to explore in small amounts at a time. If data is natively in a more structured tabular format (e.g. population statistics for a number of areas), needing quick retrieval and analysis of many records, expose it via an API. See ['Publishing your own Linked Data'](tools#publishing-your-own-linked-data) for more information.

#### Geographical data formats

Geographical data – data than can be expressed on a map – has point, line or polygon properties.

A point has *x* and *y* co-ordinates defining a precise spot in two dimensions. A *z* co-ordinate can be used for a third dimension (usually altitude, but can also be thematic, like temperature). In the UK there are many ways of expressing *x* and *y* co-ordinates according to a geodetic datum or a map projection system. There are three geodetic datums that have specific relevance in UK.

* Global longitude and latitude, as defined by the [WGS84](http://en.wikipedia.org/wiki/WGS84) geodetic datum.

* Longitude and latitude, as defined by the [ETRS89](https://en.wikipedia.org/wiki/European_Terrestrial_Reference_System_1989) geodetic datum. This standard ensures points within Europe don't move with respect to one another as the EurAsian tectonic plate moves. The difference between WGS84 and ETRS89 is only significant for points that need definition within a few centimeters of accuracy over a few years. 

* Easting and northing, as defined in the Ordnance Survey National Grid system based upon the [OSGB36](http://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid) geodetic datum. This standard expresses points by their distances from the bottom left (south-west) corner of a rectangle bounding the UK. Note that where easting and northing values are derived from Ordnance Survey data they are not always licensed for general re-use. A benefit of using OS national grid co-ordinates as easting and northings is their pre-transformed values onto a plane base to support easy trigonometrical calculations such as distance between points.

A line is a series of points such as a road or the coastline of a country.

A polygon is a collection of three or more points, which, when connected, define an area on a map or within space. KML is a standards for defining geospatial data in XML format. GeoJSON provides a similar standard in JSON format and is more suited to processing geographical information in web applications. 

Where a data standard includes geospatial information, that information can be included in KML or GeoJSON format within an XML or JSON rendering of a dataset. Alternatively, a mainly geographic dataset can be expressed in KML or GeoJSON with extra properties to represent data in addition to points and polygons. 

### Catalogues and inventories of datasets

Data catalogues list datasets with some of their metadata properties. There are many examples of catalogues in the UK open data space.

* [Data.gov.uk](https://data.gov.uk/)

* The LGA's [catalogue of datasets](http://datasets.opendata.esd.org.uk/)

* The ODI's [register of self-certified datasets](https://certificates.theodi.org/en/datasets)

* Individual council data stores, e.g. for [Redbridge council](http://data.redbridge.gov.uk/)

* Local data stores for regions, e.g. from [Data Mill North](https://datamillnorth.org/dataset)

Software products for running instances of data catalogues include Comprehensive Kerbal Archive Network (CKAN) and [DataShare](http://data.redbridge.gov.uk/About). There are two standards supporting interchange of inventories of dataset information that is held in catalogues: Data Catalog Vocabulary (DCAT) and [Inventory](http://schemas.opendata.esd.org.uk/Inventory). DCAT is a W3C Recommendation defining a vocabulary of properties for a catalogue and its datasets. The DCAT-AP extension for CKAN allows interchange of catalogue information in accordance with the DCAT specification.

Inventory is a standard expressed in XML that was developed in co-operation between the LGA, Data.gov.uk, iStandUK, Redbridge Council and Porism. 

An inventory describes published and unpublished datasets which contain data and document resources which are expressed by different renditions.

* **Datasets **are sets of records however structured – not just datasets according to standard database terminology. Datasets contain

    * **data resources**, which are files or feeds/streams of data records available in zero, one or more

        * **renditions**, which are different formats of the data, such as CSV, XML and PDF. Renditions may represent physical files or API calls. 

    * **document resources**, which are files or web pages describing datasets. They may include an API page for a dataset and documents describing a dataset (e.g. rules for data inclusion, how data was redacted). Document resources are expressed as one or more

        * **renditions**, which are different formats of the data, such as ODF, PDF and HTML.

The Inventory standard is supported by DataShare and [DataPress's plugin](https://github.com/datapressio/ckanext-lga-inventory) for CKAN. Both Data.gov.uk and the LGA's [open data site](http://opendata.esd.org.uk/) are configured to harvest catalogues from sites that are registered as supporting the Inventory standard. [This page](http://opendata.esd.org.uk/) shows the sites registered with the LGA.

Unlike the current DCAT recommendation, the Inventory standard links each dataset to the schema to which it conforms. This facilitates a search for datasets by schema at data.gov.uk and allows the LGA's pages of [schemas](http://schemas.opendata.esd.org.uk/) and [datasets](http://datasets.opendata.esd.org.uk/) to cross-reference one another. The LGA's aggregator (see [Data harvesting and aggregation](tools#data-harvesting-and-aggregation)) relies on knowing which datasets conform to the same CSV schema. 

> **The ability to discover both datasets and schemas and to associate the two is fundamental to an ecosystem of converging standards.**