<?php 
namespace App\Http\Controllers\Admin;;

use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password as RulesPassword;
use Markgersaliaph\LaravelCrudGenerate\Http\Controllers\CrudController;

class UserController extends CrudController
{
    protected $main_page_route_name = 'admin.users.index';

    protected $inertiaMainPage = 'Admin/User/List'; //name of react path to display
    protected $inertiaFormPage = 'Admin/User/Form'; 

    public function getRules(){
        if(!request()->id){

            return [
                'password' => ['required', 'confirmed', RulesPassword::min(8) 
                ->mixedCase() ]
            ];
        }

        return [];
    }

    public function beforeCreate($r){
        $r->password = bcrypt(request()->password);
        return $r;
    }
 
}
  