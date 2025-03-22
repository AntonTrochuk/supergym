const sectionFaq = document.querySelector('.main-container__faq');
const tabsButton = sectionFaq.querySelectorAll('.faq__tab-button');
const menuContentCenter = document.getElementById('faq-tab-1');
const menuContentSubscription = document.getElementById('faq-tab-2');
const menuContentServices = document.getElementById('faq-tab-3');
const menuContentRules = document.getElementById('faq-tab-4');
const toggleButtons = sectionFaq.querySelectorAll('.faq__toggle');
const contents = sectionFaq.querySelectorAll('p');


const faqTub = () => {

  contents.forEach((content, index) => {

    if (index !== 0) {
      content.classList.add('invisible');
    } else {
      content.classList.add('visible');
    }
  });

  tabsButton.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabsButton.forEach((button) => {
        button.classList.remove('tab-button-active');
      });
      tab.classList.add('tab-button-active');

      menuContentCenter.classList.add('content-hide');
      menuContentSubscription.classList.add('content-hide');
      menuContentServices.classList.add('content-hide');
      menuContentRules.classList.add('content-hide');

      const targetMenu = document.getElementById(tab.dataset.menu);
      if (targetMenu) {
        targetMenu.classList.remove('content-hide');
      }
    });
  });

  toggleButtons.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('toggle-active');

      const targetContentId = toggle.dataset.toggle;
      const targetContent = document.getElementById(targetContentId);
      if (targetContent) {
        targetContent.classList.toggle('invisible');
        targetContent.classList.toggle('visible');
      }
    });
  });
};

export { faqTub };
