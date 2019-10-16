import React from 'react';

class HeroDetails extends React.Component {
  render(){
    const { hero } = this.props;

    return (
      <ul>
        <li key={ hero.localized_name + 1 }>
          <img src={'https://api.opendota.com' + hero.img}
               key={hero.id}
               alt={hero.localized_name}/>
        </li>
        <li key={ hero.localized_name + 2 }>{`Name: ${hero.localized_name}`}</li>
        <li key={ hero.localized_name + 3 }>{`Attribute: ${hero.primary_attr}`}</li>
        <li key={ hero.localized_name + 4 }>{`Attack type: ${hero.attack_type}`}</li>
        <li key={ hero.localized_name + 5 }>{`Roles: ${hero.roles.join(', ')}`}</li>
        <li key={ hero.localized_name + 6 }>{`Base health: ${hero.base_health}`}</li>
        <li key={ hero.localized_name + 7 }>{`Base health regen: ${hero.base_health_regen}`}</li>
        <li key={ hero.localized_name + 8 }>{`Base mana: ${hero.base_mana}`}</li>
        <li key={ hero.localized_name + 9 }>{`Base mana regen: ${hero.base_mana_regen}`}</li>
        <li key={ hero.localized_name + 10 }>{`Base armor: ${hero.base_armor}`}</li>
        <li key={ hero.localized_name + 11 }>{`Base mr: ${hero.base_mr}`}</li>
        <li key={ hero.localized_name + 12 }>{`Base attack min: ${hero.base_attack_min}`}</li>
        <li key={ hero.localized_name + 13 }>{`Base attack max: ${hero.base_attack_max}`}</li>
        <li key={ hero.localized_name + 14 }>{`Base str: ${hero.base_str}`}</li>
        <li key={ hero.localized_name + 15 }>{`Base agi: ${hero.base_agi}`}</li>
        <li key={ hero.localized_name + 16 }>{`Base int: ${hero.base_int}`}</li>
        <li key={ hero.localized_name + 17 }>{`Str gain: ${hero.str_gain}`}</li>
        <li key={ hero.localized_name + 18 }>{`Agi gain: ${hero.agi_gain}`}</li>
        <li key={ hero.localized_name + 19 }>{`Int gain: ${hero.int_gain}`}</li>
        <li key={ hero.localized_name + 20 }>{`Attack range: ${hero.attack_range}`}</li>
        <li key={ hero.localized_name + 21 }>{`Projectile speed: ${hero.projectile_speed}`}</li>
        <li key={ hero.localized_name + 22 }>{`Attack rat: ${hero.attack_rat}`}</li>
        <li key={ hero.localized_name + 23 }>{`Move speed: ${hero.move_speed}`}</li>
        <li key={ hero.localized_name + 24 }>{`Turn rate: ${hero.turn_rate}`}</li>
        <li key={ hero.localized_name + 25 }>{`Cm enabled: ${hero.cm_enabled}`}</li>
        <li key={ hero.localized_name + 26 }>{`Legs: ${hero.legs}`}</li>
      </ul>
    );
  }
}

export default HeroDetails;