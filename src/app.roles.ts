import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SHOP = 'SHOP',
}

export enum AppResources {
  USER = 'USER',
  CART = 'CART',
  PRODUCT = 'PRODUCT',
  CATEGORY = 'CATEGORY',
}
export const roles: RolesBuilder = new RolesBuilder();
roles
  .grant(AppRoles.SHOP)
  .update([AppResources.CATEGORY])
  .delete([AppResources.CATEGORY])
  .create([AppResources.CATEGORY])
  .update([AppResources.PRODUCT])
  .delete([AppResources.PRODUCT])
  .create([AppResources.PRODUCT])
  //USER roles
  .grant(AppRoles.USER)
  .updateOwn([AppResources.USER])
  .deleteOwn([AppResources.USER])
  .createOwn(AppResources.CART)
  .updateOwn(AppResources.CART)
  .deleteOwn(AppResources.CART)
  //ADMIN roles
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.USER)
  .extend(AppRoles.SHOP)
  .updateAny([AppResources.USER])
  .deleteAny([AppResources.USER])
  .createAny([AppResources.USER]);
