window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('save').onclick = () => {
        const value = document.getElementById('nr-input').value;
        hash(value).then(hash => {saveHash(value.trim(), hash);});
    }

    document.getElementById('search').onclick = () => {
        const value = document.getElementById('nr-input').value;
        hash(value).then(hash => {searchHash(value.trim(), hash);});
    }
});

function saveHash(value, hash) {
    return fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({hash: hash})
    })
    .then((resp) => {
        if (resp.status === 200) {
            alert('Wert "' + value + '" gepspeichert.');
        } else {
            console.error(resp);
            alert("Eppis isch schief gange.");
        }
    })
    .catch((error) => {
        console.error(error);
        alert("Eppis isch schief gange.");
    });
};

function searchHash(value, hash) {
    return fetch('/search?' +  new URLSearchParams({ hash: hash }, {
        method: 'GET'
    }))
    .then((resp) => {
        if (resp.status === 200) {
            resp.json()
                .then(json => alert('Nummer "' + value + '"' + (json && json.time ? '' : ' nicht ') + ' gefunden.'  + (json && json.time ? ' Gespeichert am ' + new Date(json.time).toLocaleDateString() + ' ' + new Date(json.time).toLocaleTimeString() + '.' : '')));
        } else {
            console.error(resp);
            alert("Eppis isch schief gange.");
        }
    })
    .catch((error) => {
        console.error(error);
        alert("Eppis isch schief gange.");
    });
};

async function hash(value) {
    const encoder = new TextEncoder();
    const data = encoder.encode(value.trim());
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); 
    return hashHex;
  }