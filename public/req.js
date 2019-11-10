const cards = new CardList(initialCards,document.querySelector('.places-list'));
    
const api = new Api({
        method: 'PATCH',
        baseUrl: 'http://95.216.175.5/cohort3',
        headers: {
          authorization: '4bd0cc5d-bbe0-42cd-8a49-c0a6de9996c3',
          'Content-Type': 'application/json'
        }
        })

    api.getInitialCards()
    .then(res => {
             res.forEach(elem=>{
                initialCards.push({
                    'name': elem.name,
                    'link': elem.link
                })
              })
    cards.render();
});

api.infoUser()
.then((res) => {
  document.querySelector('.user-info__name').textContent= res.name;
  document.querySelector('.user-info__job').textContent = res.about;
  document.querySelector('.user-info__photo').style.backgroundImage = `url(${res.avatar})` ;
});


document.querySelector('.popup-edit__button').addEventListener('click',(event)=> {
    event.preventDefault();
    api.patchUser();
    editPopup.close();
    })