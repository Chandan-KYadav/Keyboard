const insert = document.getElementById('insert')

window.addEventListener('keydown',(event)=>{
    insert.innerHTML = `
                    <div class="table">
                    <table>
                      <tr>
                         <th>Key</th>
                         <th>Keycode</th>
                         <th>Code</th>
                      </tr>
                      <tr>
                         <td>${event.key === ' ' ? 'space': event.key}</td>
                         <td>${event.keyCode}</td>
                         <td>${event.code}</td>
                     </tr>
                     </table>
                    </div>              
                    `;
});