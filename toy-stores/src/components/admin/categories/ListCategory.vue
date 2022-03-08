<template>
  <div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Category Name: </th>
          <th scope="col">Description: </th>
          <th scope="col">Action:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Comic Book</td>
          <td class="des">A comic book, also called comicbook, comic magazine or simply comic, is a publication that consists of comics art in the form of sequential juxtaposed panels that represent individual scenes.</td>
          <td>
              <button type="button" class="btn btn-primary">Details</button>
          </td>
        </tr>
        <tr>
            <td colspan="4" class="text-danger fw-bold">There is no items...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListCategory",
};
</script>

<style
  scoped
  src="@/assets/css/components/admin/categories/Categories.css"
></style>
