const product = {
  productsList,
  cardCreation (productIdList) {
    let containerProducts = document.querySelector('.featured-all-items');
    for (let i = 0; i < productIdList.length; i++) {
      let selectedProduct = this.getProductById(productIdList[i]);
      containerProducts.innerHTML += this.layoutCreation(selectedProduct);
    }
  },
  getProductById(productId) {
    return this.productsList.find(item => item.id === productId);
  },
  layoutCreation (item) {
    return `<div class="featured-items">
                <div class="featured-item-img">
                    <img src="${item.src}" alt="${item.title}">
                    <div class="featured-items-overlay">
                        <button class="featured-items-btn">
                            <svg width="27" height="25" viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg"
                                 class="featured-items-btn-img">
                                <path
                                        d="M5.49847 22.0903C5.50635 21.6573 5.64091 21.2362 5.88519 20.88C6.12947 20.5238 6.47261 20.2483 6.87158 20.0881C7.27055 19.9279 7.7076 19.8901 8.12781 19.9794C8.54802 20.0687 8.93269 20.2812 9.23358 20.5903C9.53447 20.8993 9.73817 21.291 9.81909 21.7163C9.90002 22.1416 9.85453 22.5815 9.68842 22.9809C9.52231 23.3803 9.24296 23.7213 8.88538 23.9612C8.52779 24.201 8.10791 24.3289 7.67847 24.329C7.38955 24.3264 7.10399 24.2664 6.83807 24.1525C6.57216 24.0385 6.3311 23.8729 6.12866 23.665C5.92623 23.4571 5.76639 23.211 5.65826 22.9408C5.55013 22.6706 5.49584 22.3816 5.49847 22.0903ZM21.3045 24.329C20.8711 24.3355 20.4453 24.214 20.0797 23.9793C19.7141 23.7446 19.4247 23.407 19.2471 23.0082C19.0696 22.6095 19.0117 22.1671 19.0806 21.7356C19.1496 21.3041 19.3423 20.9023 19.6351 20.58C19.9278 20.2577 20.3077 20.0288 20.728 19.9218C21.1482 19.8148 21.5903 19.8342 21.9997 19.9777C22.4091 20.1211 22.7679 20.3824 23.0317 20.7291C23.2956 21.0759 23.453 21.4929 23.4845 21.9289C23.5269 22.5207 23.3369 23.1057 22.9555 23.5575C22.7706 23.7798 22.5436 23.9627 22.2877 24.0954C22.0319 24.228 21.7524 24.3077 21.4655 24.33L21.3045 24.329ZM8.59351 17.3908C8.38116 17.3904 8.17488 17.3193 8.00671 17.1885C7.83855 17.0578 7.71792 16.8747 7.66351 16.6677L3.73651 2.10054H0.978516C0.719001 2.10054 0.470064 1.99655 0.28656 1.8115C0.103056 1.62644 0 1.37546 0 1.11375C0 0.852037 0.103056 0.601056 0.28656 0.415999C0.470064 0.230942 0.719001 0.126953 0.978516 0.126953H4.45752C4.66982 0.127528 4.876 0.198737 5.04413 0.329458C5.21226 0.460179 5.33295 0.643156 5.38751 0.85006L9.31451 15.4172H20.0185L23.5765 7.03193H11.7185C11.459 7.03193 11.2101 6.92794 11.0266 6.74288C10.8431 6.55782 10.74 6.30684 10.74 6.04513C10.74 5.78342 10.8431 5.53244 11.0266 5.34738C11.2101 5.16233 11.459 5.05834 11.7185 5.05834H25.0535C25.2131 5.05879 25.3701 5.09978 25.5099 5.1775C25.6497 5.25522 25.7679 5.36722 25.8535 5.50311C25.9413 5.64097 25.9945 5.79831 26.0084 5.96154C26.0224 6.12478 25.9966 6.28896 25.9335 6.43992L21.5425 16.7988C21.469 16.9736 21.3462 17.123 21.1895 17.2282C21.0327 17.3334 20.8488 17.3899 20.6605 17.3908H8.59351Z"/>
                            </svg>
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
                <div class="featured-item-description">
                    <a href="product.html" class="featured-item-link">
                        <h3 class="item-description-h3">${item.title}</h3>
                    </a>
                    <p class="item-description-text">${item.description}</p>
                    <p class="item-description-price">${item.price}</p>
                </div>
            </div>`
  },
  filterProduct () {
    let numberProducts = +document.querySelector('.featured-all-items').dataset.numberProducts;
    let productIdList = [];
    for (let i = 1; i <= numberProducts; i++ ) {
      productIdList.push(Math.floor(Math.random() * productsList.length + 1));
    }
    this.cardCreation(productIdList);
  }
}

window.onload = product.filterProduct();