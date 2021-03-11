fetch("../user.json")
  .then((response) => response.json())
  .then((json) => {
    user(json);
  })
  // handling error
  .catch((err) => console.log(err));

function user(dataUser) {
  let output = "";

  dataUser.forEach((element) => {
    output += `
      <tr>
        <td class="text-center">${element.name}</td>
        <td class="text-center">${element.work}</td>
        <td class="text-center">${element.salary}</td>
        <td class="text-center">
        <button class="btn btn-success btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#editModal" onclick="editData('${element.id-1}')" title="Edit"><i class="fa fa-edit"></i></button>
        <button class="btn btn-danger btn-sm rounded-lg" type="button" data-toggle="modal" data-target="#deleteModal" onclick="deleteData('${element.id-1}')" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
    `;

  });

  const bodyTable = document.getElementById("body-table");
  bodyTable.innerHTML = output;
}

function editData(id) {
  fetch("../user.json")
    .then((response) => response.json())
    .then((json) => {
  document.getElementById('nama').value=json[id].name;
  document.getElementById('pekerjaan').value=json[id].work;
  document.getElementById('salary').value=json[id].salary;

    })
    // handling error
    .catch((err) => console.log(err));
}
function deleteData(id){
    fetch("../user.json")
    .then((response) => response.json())
    .then((json) => {
            swal("Success", "Berhasil Menghapus Data "+json[id].name, "success");
    })
    // handling error
    .catch((err) => console.log(err));
}
