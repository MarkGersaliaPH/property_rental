<?php 
namespace App\Http\Controllers\Admin;;

use Illuminate\Http\Request;
use Markgersaliaph\LaravelCrudGenerate\Http\Controllers\CrudController;

class PropertyController extends CrudController
{
    protected $main_page_route_name = 'admin.property.index';

    protected $inertiaMainPage = 'Admin/Property/List'; //name of react path to display
    protected $inertiaFormPage = 'Admin/Property/Form'; 

    public function beforeCreate($r){
        $r->posted_by_id = auth()->id();
        return $r;
    }

    public function eagerLoad(){
        return ['posted_by'];
    }

    
    protected function getRules()
    {
        return ['name'=>'required','is_featured'=>'required'];
    }
}
  