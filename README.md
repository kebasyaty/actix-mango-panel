[![Logo](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/logo.svg "Logo")](https://github.com/kebasyaty/actix-greenpanel "Logo")

# Green Panel

### Admin panel for easy use of [Green Barrel](https://github.com/kebasyaty/green-barrel "green-barrel"). This template uses [actix-web](https://github.com/actix/actix-web "actix-web").

## Attention

#### [MongoDB](https://www.mongodb.com "MongoDB") version 4.4

#### [MongoDB Rust Driver](https://crates.io/crates/mongodb/1.2.5 "MongoDB Rust Driver") version 1.2.5 is used.

#### For examples of Model fields, use [tests](https://github.com/kebasyaty/green-barrel/tree/master/test-drive/tests "tests").

## Requirements

- **actix-cors -** [https://crates.io/crates/actix-cors](https://crates.io/crates/actix-cors "https://crates.io/crates/actix-cors")
- **actix-files -** [https://crates.io/crates/actix-files](https://crates.io/crates/actix-files "https://crates.io/crates/actix-files")
- **actix-http -** [https://crates.io/crates/actix-http](https://crates.io/crates/actix-http "https://crates.io/crates/actix-http")
- **actix-multipart -** [https://crates.io/crates/actix-multipart](https://crates.io/crates/actix-multipart "https://crates.io/crates/actix-multipart")
- **actix-rt -** [https://crates.io/crates/actix-rt](https://crates.io/crates/actix-rt "https://crates.io/crates/actix-rt")
- **actix-session -** [https://crates.io/crates/actix-session](https://crates.io/crates/actix-session "https://crates.io/crates/actix-session")
- **actix-web -** [https://crates.io/crates/actix-web](https://crates.io/crates/actix-web "https://crates.io/crates/actix-web")
- **base64 -** [https://crates.io/crates/base64](https://crates.io/crates/base64 "https://crates.io/crates/base64")
- **chrono -** [https://crates.io/crates/chrono](https://crates.io/crates/chrono "https://crates.io/crates/chrono")
- **env_logger -** [https://crates.io/crates/env_logger](https://crates.io/crates/env_logger "https://crates.io/crates/env_logger")
- **futures -** [https://crates.io/crates/futures](https://crates.io/crates/futures "https://crates.io/crates/futures")
- **humansize -** [https://crates.io/crates/humansize](https://crates.io/crates/humansize "https://crates.io/crates/humansize")
- **green-barrel -** [https://crates.io/crates/mango-orm](https://crates.io/crates/mango-orm "https://crates.io/crates/green-barrel")
- **metamorphose -** [https://crates.io/crates/metamorphose](https://crates.io/crates/metamorphose "https://crates.io/crates/metamorphose")
- **regex -** [https://crates.io/crates/regex](https://crates.io/crates/regex "https://crates.io/crates/regex")
- **sanitize-filename -** [https://crates.io/crates/sanitize-filename](https://crates.io/crates/sanitize-filename "https://crates.io/crates/sanitize-filename")
- **serde_json -** [https://crates.io/crates/serde_json](https://crates.io/crates/serde_json "https://crates.io/crates/serde_json")
- **uuid -** [https://crates.io/crates/uuid](https://crates.io/crates/uuid "https://crates.io/crates/uuid")
- **serde -** [https://crates.io/crates/serde](https://crates.io/crates/serde "https://crates.io/crates/serde")
- **tera -** [https://crates.io/crates/tera](https://crates.io/crates/tera "https://crates.io/crates/tera")
- **mongodb -** [https://crates.io/crates/mongodb](https://crates.io/crates/mongodb "https://crates.io/crates/mongodb")
- **recaptcha -** [https://crates.io/crates/recaptcha](https://crates.io/crates/recaptcha "https://crates.io/crates/recaptcha")
- ...
- **Vue.js -** [https://vuejs.org/](https://vuejs.org/ "https://vuejs.org/")
- **Vuetify.js -** [https://vuetifyjs.com/](https://vuetifyjs.com/ "https://vuetifyjs.com/")
- **vue-axios -** [https://www.npmjs.com/package/vue-axios](https://www.npmjs.com/package/vue-axios "https://www.npmjs.com/package/vue-axios")
- **vue-password-strength-meter -** [https://www.npmjs.com/package/vue-password-strength-meter](https://www.npmjs.com/package/vue-password-strength-meter "https://www.npmjs.com/package/vue-password-strength-meter")
- **vue-recaptcha-v3 -** [https://www.npmjs.com/package/vue-recaptcha-v3](https://www.npmjs.com/package/vue-recaptcha-v3 "https://www.npmjs.com/package/vue-recaptcha-v3")
- **password-generator -** [https://www.npmjs.com/package/password-generator](https://www.npmjs.com/package/password-generator "https://www.npmjs.com/package/password-generator")
- **fill-range -** [https://www.npmjs.com/package/fill-range](https://www.npmjs.com/package/fill-range "https://www.npmjs.com/package/fill-range")
- **slug -** [https://www.npmjs.com/package/slug](https://www.npmjs.com/package/slug "https://www.npmjs.com/package/slug")

## Quick start

#### 1. Install mongodb (if not installed)

```shell
    ### Ubuntu, Linux Mint:
    $ sudo apt install mongodb
    ## OR
    ### Ubuntu 20.04, Linux Mint 20.x:
    $ sudo apt update
    $ sudo apt install dirmngr gnupg apt-transport-https ca-certificates
    $ wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
    $ sudo add-apt-repository 'deb [arch=amd64] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse'
    $ sudo apt update
    $ sudo apt install mongodb-org
    $ sudo systemctl enable --now mongod
    # For check
    $ mongod --version
    $ mongo --eval 'db.runCommand({ connectionStatus: 1 })'
    $ reboot
    #
    ### Configuration file:
    $ sudo nano /etc/mongod.conf
    #
    ### Systemd:
    $ sudo systemctl status mongod
    $ sudo systemctl start mongod
    $ sudo systemctl stop mongod
    $ sudo systemctl restart mongod
    $ sudo systemctl enable mongod
    $ sudo systemctl disable mongod
    #
    ### Uninstall:
    $ sudo systemctl stop mongod
    $ sudo systemctl disable mongod
    $ sudo apt --purge remove mongodb\*  # OR (for mongodb-org) - $ sudo apt --purge remove mongodb-org\**
    $ sudo rm -r /var/log/mongodb
    $ sudo rm -r /var/lib/mongodb
    $ sudo rm -f /etc/mongod.conf
    $ sudo apt-add-repository --remove 'deb [arch=amd64] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse' # for mongodb-org
    $ sudo apt update
```

#### 2. [Download and unzip the project archive](https://github.com/kebasyaty/actix-greenpanel/archive/refs/heads/main.zip "Download and unzip the project archive")

#### 3. The panel uses reCAPTCHA v3

`For development, replace the demo-keys with your own -> actix-greenpanel/src/settings/general.rs`

#### 4. Go to the project directory and run the following commands:

```shell
    $ cargo run
```

Open in a web browser http://127.0.0.1:8080/admin

## Login page

#### On the first visit to the panel, the first user with administrator rights will be created.

- **Default login:** admin
- **Default password:** 12345678
  ![Login page](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/1.png "Login page")

## Welcome page

![Welcome page](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/2.png "Welcome page")

## List of documents

![List of documents](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/3.png "List of users")

![List of documents](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/5.png "List of documents")

![Opened filter](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/14.png "Opened filter")

## Document form

![ Document form](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/4.png " Document form")

![Update password](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/13.png "Update password")

## Example of using a dynamic widget

#### Dynamic Widgets - This is a simplified alternative to `ForeignKey` and ` ManyToMan`. Dynamic widgets are used to create document-style categories.

![Example of using a dynamic widget](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/6.png "Example of using a dynamic widget")

## Image upload field

![Image upload field](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/7.png "Image upload field")

## File upload field

![File upload field](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/12.png "File upload field")

## Color selection field

![Color selection field](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/8.png "Color selection field")

## Date and time field

#### In the database, the date and time are stored in UTC format. In the admin panel, the date and time are displayed as local.

![Date and time field](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/9.png "Date and time field")

![Date and time field](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/10.png "Date and time field")

## Field `textarea` type and CKEditor 5

##### Usag CKEditor 5 with `textArea` widget

**Editor settings:** mango-panel/admin-panel/src/store/modules/ckeditor.js

```rust
    //  Example of a field in the Model.
    #[serde(default)]
    #[field_attrs(
        widget = "textArea",
        label = "Text Editor",
        maxlength = 6000,
        css_classes = "ckeditor"
    )]
    pub text_editor: Option<String>,
```

![Field `textarea` type and pulse CKEditor 5](https://github.com/kebasyaty/actix-greenpanel/raw/main/images/11.png "Field `textarea` type and pulse CKEditor 5")

## License

#### This project is licensed under the [MIT](https://github.com/kebasyaty/actix-greenpanel/blob/main/LICENSE-MIT "MIT") and [Apache Version 2.0](https://github.com/kebasyaty/actix-greenpanel/blob/main/LICENSE-APACHE "Apache Version 2.0")
