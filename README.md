# Electron App for Edge-ID test client

Loads test client of Edge-ID in an electron app.

## Usage

* Use `npm run make` to build the electron forge.
* Use the resultant binary in `out/` folder to run it on your machine.
* Ensure to run `just cmd/edge/iam/kind` on `edge-infra` repo with prerequisite dependencies installed before running the app, so the app can load Edge-ID :).
