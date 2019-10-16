import React from 'react';
import { baseUrl } from '../../services/api-service'

const HeroDetails = ({ hero }) => {
    return (
      <ul>
        <li>
          <img src={baseUrl + hero.img}
               key={hero.id}
               alt={hero.localized_name}/>
        </li>
        <li>{`Name: ${hero.localized_name}`}</li>
        <li>{`Attribute: ${hero.primary_attr}`}</li>
        <li>{`Attack type: ${hero.attack_type}`}</li>
        <li>{`Roles: ${hero.roles.join(', ')}`}</li>
        <li>{`Base health: ${hero.base_health}`}</li>
        <li>{`Base health regen: ${hero.base_health_regen}`}</li>
        <li>{`Base mana: ${hero.base_mana}`}</li>
        <li>{`Base mana regen: ${hero.base_mana_regen}`}</li>
        <li>{`Base armor: ${hero.base_armor}`}</li>
        <li>{`Base mr: ${hero.base_mr}`}</li>
        <li>{`Base attack min: ${hero.base_attack_min}`}</li>
        <li>{`Base attack max: ${hero.base_attack_max}`}</li>
        <li>{`Base str: ${hero.base_str}`}</li>
        <li>{`Base agi: ${hero.base_agi}`}</li>
        <li>{`Base int: ${hero.base_int}`}</li>
        <li>{`Str gain: ${hero.str_gain}`}</li>
        <li>{`Agi gain: ${hero.agi_gain}`}</li>
        <li>{`Int gain: ${hero.int_gain}`}</li>
        <li>{`Attack range: ${hero.attack_range}`}</li>
        <li>{`Projectile speed: ${hero.projectile_speed}`}</li>
        <li>{`Attack rat: ${hero.attack_rat}`}</li>
        <li>{`Move speed: ${hero.move_speed}`}</li>
        <li>{`Turn rate: ${hero.turn_rate}`}</li>
        <li>{`Cm enabled: ${hero.cm_enabled}`}</li>
        <li>{`Legs: ${hero.legs}`}</li>
      </ul>
    );
};

export default HeroDetails;