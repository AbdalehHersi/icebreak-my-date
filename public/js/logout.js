const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('logged out');
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  document.querySelector('#logout').addEventListener('click', logout);