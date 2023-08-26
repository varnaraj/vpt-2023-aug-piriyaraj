import React from 'react';

function Bookitem() {
  return (
    <div>
      <li className="searchResultItem" itemScope itemType="https://schema.org/Book">
        <span className="bookcover">
          <a href="/works/OL23700135W?edition=key%3A/books/OL41806807M">
            <img
              itemProp="image"
              src="//covers.openlibrary.org/b/id/13170443-M.jpg"
              alt="Cover of: Hello Baby: Baby Shower Guestbook - Space for Photos - Pink Stripes"
              title="Cover of: Hello Baby: Baby Shower Guestbook - Space for Photos - Pink Stripes"
            />
          </a>
        </span>

        <div className="details">
          <div className="resultTitle">
            <h3 itemProp="name" className="booktitle">
              <a
                itemProp="url"
                href="/works/OL23700135W?edition=key%3A/books/OL41806807M"
                className="results"
              >
                Hello Baby: Baby Shower Guestbook - Space for Photos - Pink Stripes
              </a>
            </h3>
          </div>
          <span
            itemProp="author"
            itemScope
            itemType="https://schema.org/Organization"
            className="bookauthor"
          >
            by{' '}
            <a href="/authors/OL8937854A/Amanda_Westcott" className="results">
              Amanda Westcott
            </a>
          </span>
          <span className="resultPublisher">
            <span className="publishedYear">First published in 2019</span>
            <a href="/works/OL23700135W?edition=key%3A/books/OL41806807M&mode=all#editions-list">
              127 editions
            </a>
            <span className="languages">
              in <a className="hoverlink" title="English">1 language</a>
            </span>
          </span>
        </div>

        <div className="searchResultItemCTA">
          <div className="searchResultItemCTA-lending">
            <div className="cta-button-group">
              <a href="/works/OL23700135W" className="cta-btn cta-btn--missing" data-ol-link-track="CTAClick|NotInLibrary">
                Not in Library
              </a>
            </div>
          </div>

          <div className="dropit">
            <div className="dropper on">
              <div className="log-work">
                <form method="POST" action="/works/OL23700135W/bookshelves.json">
                  <input type="hidden" name="action" value="add" />
                  <button className="unactivated" type="submit">
                    Want to Read
                  </button>
                </form>
                <a href="/account/login?redirect=/search" className="dropclick-prevent dropclick-unactivated">
                  <div className="arrow arrow-unactivated"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Bookitem;
