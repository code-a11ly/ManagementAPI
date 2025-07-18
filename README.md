# ManagementAPI

## A Data Management API

In enterprises we often face a challenge: "data and content management",
remember that car key that disappeared just before you really needed to go out?
or better that data file that you really needed to present to win the trust of that new client
but could not find?

Well for that we created the Management API, your content organized in a simple way
so that you never miss what is rightfully yours.

## Contents

![](/Draw.io/blob/main/ManagementAPI.drawio.png)

### Resource
First we have the resource or file that is stored, the file type etc.

### Topic
Second we have the Topic of the resource stored, like name of the file, time of creation and update of the file.

### User
Last but not least, the user and it's permissions:
- User: Read permission
- Editor: Create, Edit and Read permissions
- Admin: Delete, Create, Edit and Read permissions

## How to install

git clone this repository:

> git clone git@github.com:code-a11ly/ManagementAPI.git

Install all the necessary dependencies:

> npm install --save-dev typescript ts-node @types/node @types/express

Run the code:

> node src/app.ts

## How is the code structured

Data: where the data itself is stored.

Models: where the base for the data structure is informed.

Services: where the data is stored or gotten from the Data.

Middleware: Where the data provided (in Controllers) is verified if it is according to the file type
provided in the models, before being passed for storage (in Services).

Controllers: where the requests arrive and depending on the answers of the services it will give
back the data or an error message.

Routes: where the routes that give access to each Controller are stored.
