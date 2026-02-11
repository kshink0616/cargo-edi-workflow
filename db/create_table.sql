CREATE TABLE countries (
     country_id                     integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,country_code                   integer         NOT NULL
    ,name                           varchar(100)    NOT NULL
    ,international_calling_code     varchar(3)      NOT NULL
    ,create_at                      timestamptz     NOT NULL
    ,update_at                      timestamptz
    ,delete_at                      timestamptz
);

CREATE TABLE airports (
     airport_id     integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,airport_code   varchar(3)      NOT NULL
    ,name           varchar(50)     NOT NULL
    ,create_at      timestamptz     NOT NULL
    ,update_at      timestamptz
    ,delete_at      timestamptz
);

CREATE TABLE companies (
     company_id     integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,company_code   integer         NOT NULL
    ,name           varchar(50)     NOT NULL
    ,company_type   varchar(20)     NOT NULL
    ,carrier_code   varchar(2)
    ,create_at      timestamptz     NOT NULL
    ,update_at      timestamptz
    ,delete_at      timestamptz
);

CREATE TABLE addresses (
     address_id     integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,company_id     integer         NOT NULL REFERENCES companies(company_id)
    ,country_id     integer         NOT NULL REFERENCES countries(country_id)
    ,postal_no      varchar(10)     NOT NULL
    ,state_province varchar(100)    NOT NULL
    ,locality       varchar(100)    NOT NULL
    ,address_line1  varchar(35)     NOT NULL
    ,address_line2  varchar(35) 
    ,address_line3  varchar(35) 
    ,recipient_name varchar(100)    NOT NULL
    ,telephone_no   varchar(20)     NOT NULL
    ,email_address  varchar(254) 
    ,create_at      timestamptz     NOT NULL
    ,update_at      timestamptz
    ,delete_at      timestamptz
);

CREATE TABLE currencies (
     currency_id    integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,currency_code  varchar(3)      NOT NULL
    ,country_code   varchar(2)      NOT NULL
    ,create_at      timestamptz     NOT NULL
    ,update_at      timestamptz
    ,delete_at      timestamptz
);

CREATE TABLE charges (
     charge_id      integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,charge_code    varchar(3)      NOT NULL
    ,name           varchar(30)     NOT NULL
    ,create_at      timestamptz     NOT NULL
    ,update_at      timestamptz
    ,delete_at      timestamptz
);

CREATE TABLE shipments (
     shipment_id                integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,air_waybill_no             varchar(20)     NOT NULL UNIQUE
    ,shipment_at                date            NOT NULL
    ,origin_airport_id          integer         NOT NULL NOT NULL REFERENCES airports(airport_id)
    ,destination_airport_id     integer         NOT NULL NOT NULL REFERENCES airports(airport_id)
    ,create_at                  timestamptz     NOT NULL
    ,update_at                  timestamptz
    ,delete_at                  timestamptz
);

CREATE TABLE shipment_parties (
     shipment_party_id  integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,shipment_id        integer         NOT NULL REFERENCES shipments(shipment_id)
    ,party_type         varchar(20)     NOT NULL
    ,company_id         integer         NOT NULL REFERENCES companies(company_id)
    ,address_id         integer         NOT NULL REFERENCES addresses(address_id)
    ,create_at          timestamptz     NOT NULL
    ,update_at          timestamptz
    ,delete_at          timestamptz
);

CREATE TABLE shipment_routings (
     shipment_routing_id    integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,shipment_id            integer         NOT NULL REFERENCES shipments(shipment_id)
    ,number                 integer         NOT NULL
    ,departure_airport_id   integer         NOT NULL REFERENCES airports(airport_id)
    ,departure_date         timestamptz     NOT NULL
    ,arrival_airport_id     integer         NOT NULL REFERENCES airports(airport_id)
    ,arrival_date           timestamptz     NOT NULL
    ,carrier_company_id     integer         NOT NULL REFERENCES companies(company_id)
    ,flight_no              varchar(4)      NOT NULL
    ,create_at              timestamptz     NOT NULL
    ,update_at              timestamptz
    ,delete_at              timestamptz
);

CREATE TABLE shipment_goods (
     shipment_goods_id  integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,shipment_id        integer         NOT NULL REFERENCES shipments(shipment_id)
    ,total_piece        integer         NOT NULL
    ,total_weight       numeric(7, 1)   NOT NULL
    ,currency_id        integer         NOT NULL REFERENCES currencies(currency_id)
);

CREATE TABLE shipment_goods_items (
     shipment_goods_item_id     integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,shipment_goods_id          integer         NOT NULL REFERENCES shipment_goods(shipment_goods_id)
    ,commodity_name             varchar(50)     NOT NULL
    ,piece                      integer         NOT NULL
    ,origin_country_id          integer         NOT NULL REFERENCES countries(country_id)
    ,weight                     numeric(7, 1)   NOT NULL
    ,hs_code                    varchar(50)     NOT NULL
);

CREATE TABLE shipment_information (
     shipment_information_id    integer         GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,shipment_id                integer         NOT NULL REFERENCES shipments(shipment_id)
    ,text                       varchar(50)     NOT NULL
    ,create_at                  timestamptz     NOT NULL
    ,update_at                  timestamptz
    ,delete_at                  timestamptz
);

CREATE TABLE shipment_charges (
     shipment_charge_id     integer             GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,shipment_id            integer             NOT NULL REFERENCES shipments(shipment_id)
    ,charge_id              integer             NOT NULL REFERENCES charges(charge_id)
    ,amount                 numeric(15, 2)      NOT NULL
    ,create_at              timestamptz         NOT NULL
    ,update_at              timestamptz
    ,delete_at              timestamptz
);

CREATE TABLE shipment_declared_values (
     shipment_declared_value_id     integer             GENERATED ALWAYS AS IDENTITY PRIMARY KEY
    ,shipment_id                    integer             NOT NULL REFERENCES shipments(shipment_id)
    ,value_type                     varchar(20)         NOT NULL
    ,amount                         numeric(15, 2)      NOT NULL
    ,create_at                      timestamptz         NOT NULL
    ,update_at                      timestamptz
    ,delete_at                      timestamptz
);
