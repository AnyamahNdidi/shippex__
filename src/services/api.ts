// loginService.ts
const login = async (email: string, password: string) => {
  try {
    const response = await fetch('https://shippex-demo.bc.brandimic.com/api/method/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded', // Ensure proper content type
      },
      body: new URLSearchParams({
        usr: email,
        pwd: password,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return { success: true, data: result };
    } else {
    
      const errorResult = await response.json();
      return { success: false, error: errorResult.message || 'An unknown error occurred' };
    }
  } catch (error) {
    console.error('Login error', error);
    return { success: false, error: 'Network error or server issue' };
  }
};

export default login;
