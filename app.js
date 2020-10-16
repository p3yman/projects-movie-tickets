/****************************************************************************
*
*    Movie Tickets Booking 
*    Author: Peyman Eskandari (https://github.com/p3yman)
*
****************************************************************************/

/* Elements
*****************************************************/
const loading = document.querySelector('#loading');

/**
 * Show loading element
 */
function showLoading() {
  loading.classList.add('is-visible');
}

/**
 * Hide loading element
 */
function hideLoading() {
  loading.classList.remove('is-visible');
}

setTimeout(hideLoading, 2500);