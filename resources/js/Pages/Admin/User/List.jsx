import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Table from "@/Components/Table"; 
import Pagination from "@/Components/Pagination";

function List({ auth, items }) {
  const baseUrl = "admin.users";
  const tableHeader = ["Name","Type","Created"]; 
  const tableBody = items.data.map((data) => ({
      id: data.id, // the user's ID
      data: [
        data.name, 
        data.type_display, 
          data.created_at,  
      ], 
  }));

  
  const actions = {
    destroy: `${baseUrl}.destroy`,
    edit: `${baseUrl}.edit`,
};

 
  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            User
          </h2>
        }
      >
        <Head title="User List" />

        <div className="py-5">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {baseUrl && (
              <PrimaryButton
                className="my-5"
                onClick={() => {
                  router.visit(route(`${baseUrl}.create`));
                }}
              >
                Create User
              </PrimaryButton>
            )}
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <div className=" text-gray-900 border-b pb-5">User List</div>
             
             <div>
              <Table headers={tableHeader} body={tableBody} actions={actions} />
              <Pagination items={items} />
             </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default List;
