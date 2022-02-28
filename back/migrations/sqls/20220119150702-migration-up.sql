CREATE extension
if not exists pgcrypto;

CREATE TABLE usr (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE oauth (
    id SERIAL PRIMARY KEY,
    token TEXT NOT NULL,
    refresh_token TEXT NOT NULL,
    duration TEXT NOT NULL,
    generated_at TEXT NOT NULL,
    usr_id uuid NOT NULL,
    CONSTRAINT fk_usr FOREIGN KEY(usr_id) REFERENCES usr(id)
);

CREATE TABLE service (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    has_oauth BOOL NOT NULL,
    query_code TEXT NOT NULL,
    query_token TEXT NOT NULL,
    logo TEXT NOT NULL,
    client_id TEXT NOT NULL,
    client_secret TEXT NOT NULL,
    redirect_uri TEXT NOT NULL,
    scope TEXT NOT NULL
);

CREATE TABLE adictionnary (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    service_id INT NOT NULL,
    CONSTRAINT fk_service FOREIGN KEY(service_id) REFERENCES service(id)
);

CREATE TABLE readictionnary (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    service_id INT NOT NULL,
    CONSTRAINT fk_service FOREIGN KEY(service_id) REFERENCES service(id)
);

CREATE TABLE action (
    id SERIAL PRIMARY KEY,
    service_name TEXT NOT NULL,
    action_type TEXT NOT NULL,
    params TEXT NOT NULL
);

CREATE TABLE reaction (
    id SERIAL PRIMARY KEY,
    service_name TEXT NOT NULL,
    reaction_type TEXT NOT NULL,
    params TEXT NOT NULL,
    reaction_route TEXT NOT NULL
);

CREATE TABLE area (
    id SERIAL PRIMARY KEY,
    r_service TEXT NOT NULL,
    r_type TEXT NOT NULL,
    r_params TEXT NOT NULL,
    id_act INT NOT NULL,
    CONSTRAINT fk_action FOREIGN KEY(id_act) REFERENCES action(id),
    id_react INT NOT NULL,
    CONSTRAINT fk_reaction FOREIGN KEY(id_react) REFERENCES reaction(id),
    usr_id uuid NOT NULL,
    CONSTRAINT fk_usr FOREIGN KEY(usr_id) REFERENCES usr(id)
);

-- SERVICES
INSERT INTO "service" ("name", "has_oauth", "query_code", "query_token", "logo", "client_id", "client_secret", "redirect_uri", "scope")
VALUES ('Github', '1', 'https://github.com/login/oauth/authorize', 'https://github.com/login/oauth/access_token', '/github.png', '07ffe0c7a5f5148909e2', '4d758dd8b4e8fcfe9aaf30e353ebc87ad9a069ce', 'http://localhost:8081', ''); -- ID:1
INSERT INTO "service" ("name", "has_oauth", "query_code", "query_token", "logo", "client_id", "client_secret", "redirect_uri", "scope")
VALUES ('Mailjet', '0', '', '', '/mail.png', '', '', '', ''); -- ID:2

-- ACTIONS
INSERT INTO adictionnary ("name", "description", "service_id")
VALUES ('Any new repository event', 'This trigger reactuib every time a new event occurs in a repository.', '1');

-- REACTIONS
INSERT INTO "readictionnary" ("name", "description", "service_id")
VALUES ('Send an email', 'When triggered, send an email to a chosen recipient, a subject and a body', '2');