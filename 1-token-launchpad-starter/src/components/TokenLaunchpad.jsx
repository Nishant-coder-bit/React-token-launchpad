
export function TokenLaunchpad() {
    function createToken() {
      const name = document.getElementById('name').value;
      const symbol = document.getElementById('symbol').value;
      const image = document.getElementById('image').value;
      const supply = document.getElementById('supply').value;
      console.log( name, symbol, image, supply);

    
    
    }
    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input id='name' className='inputText' type='text' placeholder='Name'></input> <br />
        <input id="symbol" className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input id="image" className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input id="supply" className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button id="btn" className='btn' onClick={createToken}>Create a token</button>
    </div>
}