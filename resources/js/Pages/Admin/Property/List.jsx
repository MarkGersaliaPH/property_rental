import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Table from "@/Components/Table"; 
import Pagination from "@/Components/Pagination";
import dayjs from "dayjs";

function List({ auth, items }) {
  const baseUrl = "admin.property";
  const tableHeader = ["Name","Status","Posted By","Created"]; 
  const tableBody = items.data.map((data) => ({
      id: data.id, // the user's ID
      data: [
        data.name, 
        data.is_featured, 
        data.posted_by?.name, 
          dayjs(data.created_at).format("YYYY-MM-DD"),  
      ], 
  }));

  
  const actions = {
    destroy: `${baseUrl}.destroy`,
    edit: `${baseUrl}.edit`,
};


console.log(items.data)
 
  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Property
          </h2>
        }
      >
        <Head title="Property List" />

        <div className="py-5">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {baseUrl && (
              <PrimaryButton
                className="my-5"
                onClick={() => {
                  router.visit(route(`${baseUrl}.create`));
                }}
              >
                Create Property
              </PrimaryButton>
            )}
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <div className=" text-gray-900 border-b pb-5">Property List</div>
             
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
