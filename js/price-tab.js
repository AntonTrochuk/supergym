const tabsButton = document.querySelectorAll('.price__tabs-button');
const textsShadow = Array.from(document.querySelectorAll('.price__text-shadow'));
const priceTexts = Array.from(document.querySelectorAll('.price__text'));
const oneMonths = ['5000', '1700', '2700'];
const sixMonths = ['30000', '10200', '16200'];
const twelveMonths = ['60000', '20400', '32400'];

const priceTab = () => {
  tabsButton.forEach((tabButton) => {
    tabButton.addEventListener('click', () => {

      tabsButton.forEach((button) => {
        button.classList.remove('tabs-button--active');
      });
      tabButton.classList.add('tabs-button--active');

      if (tabButton.dataset.tab === 'tab-1') {
        textsShadow[0].textContent = oneMonths[0];
        textsShadow[1].textContent = oneMonths[1];
        textsShadow[2].textContent = oneMonths[2];
        priceTexts[0].textContent = oneMonths[0];
        priceTexts[1].textContent = oneMonths[1];
        priceTexts[2].textContent = oneMonths[2];
      } else if (tabButton.dataset.tab === 'tab-2') {
        textsShadow[0].textContent = sixMonths[0];
        textsShadow[1].textContent = sixMonths[1];
        textsShadow[2].textContent = sixMonths[2];
        priceTexts[0].textContent = sixMonths[0];
        priceTexts[1].textContent = sixMonths[1];
        priceTexts[2].textContent = sixMonths[2];
      } else if (tabButton.dataset.tab === 'tab-3') {
        textsShadow[0].textContent = twelveMonths[0];
        textsShadow[1].textContent = twelveMonths[1];
        textsShadow[2].textContent = twelveMonths[2];
        priceTexts[0].textContent = twelveMonths[0];
        priceTexts[1].textContent = twelveMonths[1];
        priceTexts[2].textContent = twelveMonths[2];
      }
    });
  });


};

export { priceTab };
