const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/favourites/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/favorites');
      } else {
        alert('Failed to delete icebreaker');
      }
    }
  };

  document
  .querySelector('.fav-list')
  .addEventListener('click', delButtonHandler);