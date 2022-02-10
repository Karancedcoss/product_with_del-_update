arr=[];

function addData(){
    var sku = document.getElementById('product_sku').value;
    var pname = document.getElementById('product_name').value;
    var price = document.getElementById('product_price').value;
    var qt = document.getElementById('product_quantity').value;

    data(sku, pname, price, qt);
    display(arr);

}

function data(sku, pname, price, qt)
{
    for(var i = 0; i < arr.length; i++)
    {
        if (arr[i].SKU == sku)
        {
            alert("Already exist");
            return;
        }
    }
    product = {};
    product["SKU"] = sku;
    product["NAME"] = price;
    product["PRICE"] = price;
    product["QT"] = qt;
    arr.push(product);

}

function display(result){
    var text=document.getElementById("table");
    text.innerHTML="<tr>\
    <th>Product SKU</th>\
    <th>Product Name</th>\
    <th>Product Price</th>\
    <th>Product Quantity</th>\
    </tr>"
    for(let i=0;i<result.length; i++){
        text.innerHTML+='<tr>\
        <td>' + result[i].SKU + '</td>\
        <td>' + result[i].NAME + '</td>\
        <td>' + result[i].PRICE + '</td>\
        <td>' + result[i].QT + '</td>\
        <td><a href="javascript:void(0)" onclick="deleteRow(' + result[i].SKU + ')">Delete</a></td>\
        <td><a href="javascript:void(0)" onclick="editRow(' + result[i].SKU + ')">Edit</a></td>\
        </tr>';
    }
}

function editRow(sku){
    var p = {};

    for(var i = 0;i< arr.length; i++){
        if(arr[i].SKU == sku){
            p = arr[i];
        }
    }

    editForm(p);
}

function editForm(p){

    document.getElementById('product_sku').value = p.SKU;
    document.getElementById('product_name').value = p.NAME;
    document.getElementById('product_price').value = p.PRICE;
    document.getElementById('product_quantity').value = p.QT;

    document.getElementById('update_productbtn').style.display="block";
    document.getElementById('add_productbtn').style.display="none";
}

function updateProduct(){
    var sku = document.getElementById('product_sku').value;
    var pname = document.getElementById('product_name').value;
    var price = document.getElementById('product_price').value;
    var qt = document.getElementById('product_quantity').value;
    if(alreadyExist(sku)){
        for(var i = 0;i < arr.length; i++){
            if(arr[i].SKU == sku){
                arr[i].NAME = pname;
                arr[i].PRICE = price;
                arr[i].QT = qt;
            }
        }
    }
    display(arr);
    
}

function alreadyExist(sku){
    for(var i = 0 ; i<arr.length ; i++){
        if(arr[i].SKU == sku){
            return true;
        }
    }
    return false;
}


function deleteRow(sku){
    for(var i = 0;i < arr.length; i++ ){
        if(arr[i].SKU == sku){
            arr.splice(i,1);
        }
    }
    display(arr);
}
