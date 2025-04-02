'use strict';

(async _ => {
  const statistics = new Statistics();
  let user = JSON.parse(localStorage.getItem('user'));

  const joinButton = document.querySelector('#joinToChannel')
  joinButton?.addEventListener('click', async (e) => {
    joinButton.disabled = true;
    await statistics.onClickTgBtn();
    joinButton.disabled = false;
    window.location.href = 'https://t.me/dildoratursunovaofficial';
  })

  if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();

    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append('Tariff', user?.tariff);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);

    let response = await fetch('https://script.google.com/macros/s/AKfycbxD1kJ2cZk-qxzUxHlYvpyQ74FM8BxzLDfvUBhfdVCo09UN3jkYVHBCh4wOftGYZJcaGQ/exec', {
      method: 'POST',
      body: formData
    })
    await response.json();
    await statistics.onRegister(user);
    localStorage.removeItem('user');
  } else {
    localStorage.removeItem('user');
  }
})()

