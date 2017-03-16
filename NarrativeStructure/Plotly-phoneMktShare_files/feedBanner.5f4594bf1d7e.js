const currentUrl = window.location.href;
if (currentUrl.indexOf('feed') > -1 || (currentUrl === 'https://plot.ly/')) {
    const bannerElem = document.getElementById('marketing-feed-banner');
    bannerElem.className = 'feed-banner +visible';
}
