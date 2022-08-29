function writeClipboard(){
    navigator.clipboard.writeText('format C:');
}

async function readClipboard(){
    let x = await navigator.clipboard.read();
    console.log(x);
    document.querySelector('#c-cont').innerHTML = x;
}

document.querySelector("#read-btn").addEventListener('click', readClipboard);

writeClipboard();