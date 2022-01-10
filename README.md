# App Title: Hogwarts School of Witchcraft and Wizardry


### App Description: A react application where you can aply to the Hogwarts School of Witchcraft and Wizardry and choose which house to inlist in. You will be given a student application form to submit to the school. Once you fill out the information required on the form, you submit it for request approval. If you dont feel confident about your application you can delete it. You can also check a list of Alumni (You might get accepted or rejected). 

### Air-table API: "https://api.airtable.com/v0/app3GZegOGWXeUvpY/Students

### API Snippet:

```
{
    "records": [
        {
            "id": "recnVfQNleZu7lQR5",
            "fields": {
                "house": "Gryffindor",
                "image": "http://hp-api.herokuapp.com/images/harry.jpg",
                "name": "Harry Potter",
                "ancestry": "half-blood",
                "position": "student"
            },
            "createdTime": "2022-01-09T23:46:34.000Z"
        },
        {
            "id": "recyS5Dxs84N5bcSi",
            "fields": {
                "house": "Slytherins ",
                "image": "https://static.wikia.nocookie.net/harrypotter/images/8/84/Draco_Malfoy_%28HBP_promo%29.jpg/revision/latest/scale-to-width-down/1226?cb=20140623200347",
                "name": "Draco Malfoy",
                "ancestry": "pure-blood",
                "position": "student"
            },
            "createdTime": "2022-01-09T23:46:34.000Z"
        },
        {
            "id": "rec6ODwiYrnYpML2U",
            "fields": {
                "house": "Hufflepuff",
                "image": "https://qph.fs.quoracdn.net/main-qimg-5fba4c04523d4175fee299fa20e4caef-pjlq",
                "name": "Cedric Diggory",
                "ancestry": "pure-blood",
                "position": "student"
            },
            "createdTime": "2022-01-09T23:46:34.000Z"
        }
    ],
    "offset": "itrq6IIzAMrZ7mZIC/rec6ODwiYrnYpML2U"
}
```

### Wiredframes

![webimage](https://i.imgur.com/7wJ1eKb.png)


### Component Hierarchy:

![webimage](https://i.imgur.com/S0KXuBf.png)

### MVP:

- **The application button willl send you to a form to Apply to a specific house**
- **Use axios to GET the data from Air Table**
- **Use axios to POST new data to the api**
- **Add a delete button to remove data from the Air table**
- **Add a Alumni button that will show the previous students from the house**
- **Add a special effect for the search buttons**

### Post-MVP:

**Add music to the background**
**Add a edit button for the applicantsn**
**Show if applicants are accepted or rejectect **
**Add a toast effect that display a message after you click buttons**


### Goals:

| Day    | Deliverable                                       | Status   |
| ------ | ------------------------------------------------- | -------- |
| Jan 09 | Air-table SetUp /  Repo ReadMe/                   | Complete |
| Jan 10 | Student inputs/ Poject Approval                   | 
| Jan 11 | npm installs/ Components setups                   |
| Jan 12 | MVP implimantation/ Post MVP                      | 
| Jan 13 | Post MVP implimantation                           |
| Jan 14 | CSS styling/ add more Post MVP if possible        | 
| Jan 18 | Presentations                                     | 


### Timeframes:

| Component                                             | Priority | Estimated Time | 
| ----------------------------------------------------- | :------: | :------------: | 
| JS setup, Air-table Api                               |    M     |      1hrs      |     
| Setting up API and GET axios function                 |    H     |      4hrs      |              
| Response data setup/fetching                          |    H     |      2hrs      |            
| Filter through the response data                      |    H     |      3hrs      |           
| Set up components files                               |    H     |      3hrs      |           
| Incorporating the user input and API call             |    H     |      4hrs      |           
| Debugging of the user input/API call                  |    H     |      2hrs      |           
| Web page layout                                       |    H     |      3hrs      |           
| CSS styling of character info from search API results |    M     |      6hrs      |           
| CSS styling for Componenets                           |    L     |      3hrs      |                    
| Create an interactive serch botton                    |    L     |      3hrs      | 
|Implements Post MVPs/ Clean up                         |    L     |      4hrs      |
| Total                                                 |    H     |      38rs      |           
