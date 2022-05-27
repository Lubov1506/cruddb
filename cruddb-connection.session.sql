CREATE TABLE things (
    id serial PRIMARY KEY,
    body text NOT NULL CHECK (body !=''),
    created_at timestamp not null DEFAULT current_timestamp,
    updated_at timestamp not null DEFAULT current_timestamp
);
INSERT INTO things (body)
VALUES();