import { IPmcData } from "../../eft/common/IPmcData";
import { IInventoryFoldRequestData } from "../../eft/inventory/IInventoryFoldRequestData";
import { IInventorySplitRequestData } from "../../eft/inventory/IInventorySplitRequestData";
import { IInventoryMoveRequestData } from "../../eft/inventory/IInventoryMoveRequestData";
import { IInventoryMergeRequestData } from "../../eft/inventory/IInventoryMergeRequestData";
import { IInventoryRemoveRequestData } from "../../eft/inventory/IInventoryRemoveRequestData";
import { IInventoryTransferRequestData } from "../../eft/inventory/IInventoryTransferRequestData";
import { IInventorySwapRequestData } from "../../eft/inventory/IInventorySwapRequestData";
import { IInventoryToggleRequestData } from "../../eft/inventory/IInventoryToggleRequestData";
import { IInventoryTagRequestData } from "../../eft/inventory/IInventoryTagRequestData";
import { IInventoryBindRequestData } from "../../eft/inventory/IInventoryBindRequestData";
import { IInventoryExamineRequestData } from "../../eft/inventory/IInventoryExamineRequestData";
import { IInventoryReadEncyclopediaRequestData } from "../../eft/inventory/IInventoryReadEncyclopediaRequestData";
import { IInventorySortRequestData } from "../../eft/inventory/IInventorySortRequestData";
import { IInventoryCreateMarkerRequestData } from "../../eft/inventory/IInventoryCreateMarkerRequestData";
import { IInventoryDeleteMarkerRequestData } from "../../eft/inventory/IInventoryDeleteMarkerRequestData";
import { IInventoryEditMarkerRequestData } from "../../eft/inventory/IInventoryEditMarkerRequestData";
import { IItemEventRouterResponse } from "../../eft/itemEvent/IItemEventRouterResponse";

export interface IInventoryCallbacks
{
    moveItem(pmcData: IPmcData, body: IInventoryMoveRequestData, sessionID: string): IItemEventRouterResponse;
    removeItem(pmcData: IPmcData, body: IInventoryRemoveRequestData, sessionID: string): IItemEventRouterResponse;
    splitItem(pmcData: IPmcData, body: IInventorySplitRequestData, sessionID: string): IItemEventRouterResponse;
    mergeItem(pmcData: IPmcData, body: IInventoryMergeRequestData, sessionID: string): IItemEventRouterResponse;
    transferItem(pmcData: IPmcData, body: IInventoryTransferRequestData, sessionID: string): IItemEventRouterResponse;
    swapItem(pmcData: IPmcData, body: IInventorySwapRequestData, sessionID: string): IItemEventRouterResponse;
    foldItem(pmcData: IPmcData, body: IInventoryFoldRequestData, sessionID: string): IItemEventRouterResponse;
    toggleItem(pmcData: IPmcData, body: IInventoryToggleRequestData, sessionID: string): IItemEventRouterResponse;
    tagItem(pmcData: IPmcData, body: IInventoryTagRequestData, sessionID: string): IItemEventRouterResponse;
    bindItem(pmcData: IPmcData, body: IInventoryBindRequestData, sessionID: string): IItemEventRouterResponse;
    examineItem(pmcData: IPmcData, body: IInventoryExamineRequestData, sessionID: string): IItemEventRouterResponse;
    readEncyclopedia(pmcData: IPmcData, body: IInventoryReadEncyclopediaRequestData, sessionID: string): IItemEventRouterResponse;
    sortInventory(pmcData: IPmcData, body: IInventorySortRequestData, sessionID: string): IItemEventRouterResponse;
    createMapMarker(pmcData: IPmcData, body: IInventoryCreateMarkerRequestData, sessionID: string): IItemEventRouterResponse;
    deleteMapMarker(pmcData: IPmcData, body: IInventoryDeleteMarkerRequestData, sessionID: string): IItemEventRouterResponse;
    editMapMarker(pmcData: IPmcData, body: IInventoryEditMarkerRequestData, sessionID: string): IItemEventRouterResponse;
}
