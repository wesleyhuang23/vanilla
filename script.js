
    
    // var results = [
    //     {txt: "<div> some text <button name='1'>details</button></div>"},
    //     {txt: "<div> some text <button name='4'>details</button></div>"},
    //     {txt: "<div> some text <button name='2'>details</button></div>"},
    //     {txt: "<div> some text <button name='7'>details</button></div>"},
    //     {txt: "<div> some text <button name='5'>details</button></div>"},
    //     {txt: "<div> some text <button name='6'>details</button></div>"},
    //     {txt: "<div> some text <button name='5'>details</button></div>"}  
    // ]
    // document.body.appendChild(results[0]);

    let DOMobject = document.createElement('div');
    DOMobject.style.width = '100px';
    DOMobject.style.height = '100px';
    DOMobject.style.background = "green";

    document.getElementById('container').appendChild(DOMobject);


    // function loadResults(results) {
    //     for(var i = 0; i < results.length; i++){
    //         document.body.appendChild(results[0].text);
    //     }
    
    // } 
    // loadResults(results);

