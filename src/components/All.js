import { useEffect } from "react";

const All = (props) => {

  const myfunc = () => {
    const galleryContainer = document.querySelector('.gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const filterButtons = document.querySelectorAll('.filter-buttons button');

    let currentIndex = 0;

    // Get only visible gallery items
    const getVisibleItems = () => {
      return Array.from(document.querySelectorAll('.gallery-item'))
        .filter(item => item.style.display !== 'none');
    };

    // Open Lightbox (event delegation)
    galleryContainer.addEventListener('click', (e) => {
      const clickedImg = e.target.closest('.gallery-item img');
      if (clickedImg) {
        const visibleItems = getVisibleItems();
        currentIndex = visibleItems.findIndex(item =>
          item.querySelector('img').src === clickedImg.src
        );
        lightboxImage.src = clickedImg.src;
        lightbox.style.display = 'flex';
      }
    });

    // Close Lightbox
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    // Navigation
    nextBtn.addEventListener('click', () => {
      const visibleItems = getVisibleItems();
      currentIndex = (currentIndex + 1) % visibleItems.length;
      lightboxImage.src = visibleItems[currentIndex].querySelector('img').src;
    });

    prevBtn.addEventListener('click', () => {
      const visibleItems = getVisibleItems();
      currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
      lightboxImage.src = visibleItems[currentIndex].querySelector('img').src;
    });

    // Close on outside click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });

    // Filtering
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.filter-buttons .active').classList.remove('active');
        btn.classList.add('active');
        const category = btn.dataset.filter;

        document.querySelectorAll('.gallery-item').forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  };

  useEffect(() => {
    myfunc()
  }, [])

  const items = [
    {
      id: '1',
      img: "images/Animals/animal1.jpg",
      category: "animals"
    },
    {
      id: '2',
      img: "images/Animals/animal2.jpg",
      category: "animals"
    },
    {
      id: '3',
      img: "images/Animals/animal3.jpg",
      category: "animals"
    },
    {
      id: '4',
      img: "images/Animals/animal4.jpg",
      category: "animals"
    },
    {
      id: '13',
      img: "images/Animals/animal5.jpg",
      category: "animals"
    },
    {
      id: '5',
      img: "images/City/city1.jpg",
      category: "city"
    },
    {
      id: '6',
      img: "images/City/city2.jpg",
      category: "city"
    },
    {
      id: '7',
      img: "images/City/city3.jpg",
      category: "city"
    },
    {
      id: '8',
      img: "images/City/city4.jpg",
      category: "city"
    },
    {
      id: '14',
      img: "images/City/city5.jpg",
      category: "city"
    },
    {
      id: '9',
      img: "images/Nature/nature1.jpg",
      category: "nature"
    },
    {
      id: '10',
      img: "images/Nature/nature2.jpg",
      category: "nature"
    },
    {
      id: '11',
      img: "images/Nature/nature3.jpg",
      category: "nature"
    },
    {
      id: '12',
      img: "images/Nature/nature4.jpg",
      category: "nature"
    },
    {
      id: '15',
      img: "images/Nature/nature5.jpg",
      category: "nature"
    }
  ]
  return (
    <>
      <div className="gallery">
        {
          items.map((el) => {
            return (
              <>
                {(props.cat === "all" || el.category === props.cat) ? <div key={el.id}>
                  <div className="gallery-item" data-category={el.category}>
                    <img src={el.img} alt={el.category} />
                  </div>
                </div>
                  :
                  null
                }
              </>
            )
          }
          )
        }
      </div>
      <div id="lightbox" className="lightbox">
        <span className="close">&times;</span>
        <img className="lightbox-image" src="" alt="" />
        <div className="lightbox-controls">
          <button id="prev">&#10094;</button>
          <button id="next">&#10095;</button>
        </div>
      </div>
    </>
  )
}

export default All
