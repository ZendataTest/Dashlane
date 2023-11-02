"use strict";(globalThis.webpackChunk_dashlane_leeloo=globalThis.webpackChunk_dashlane_leeloo||[]).push([[2716],{941768:(e,t,n)=>{n.r(t),n.d(t,{Connected:()=>E});var a,o=n(142897),r=n(799852),i=n(448430),c=n(382706),s=n(696832),l=n(453576),u=n(441217),d=n(661410),m=n(787268),_=n(201389),p=n(62429),b=n(66941),k=n(635164),g=n(60043),h=n(796446),C=n(702394),f=n(887982),S=n(103181),A=n(995544),w=n(192783),y=n(461201);const D=({item:e,lee:t})=>{const{translate:n}=(0,_.Z)(),{routes:r}=(0,g.Xo)(),{current:i}=(0,s.useRef)([]),[c,D]=(0,s.useState)(!1),[E,L]=(0,s.useState)(!1),[N,B]=(0,s.useState)(new Set),[I,Z]=(0,s.useState)(e),[U,T]=(0,s.useState)(!1),{areProtectedItemsUnlocked:v,openProtectedItemsUnlocker:V,protectedItemsUnlockerShown:G}=(0,w.t)(),J=(0,A.B)(),P=(0,m.V)();(0,s.useEffect)((()=>((0,p.Nc)(d.PageView.ItemBankStatementDetails),()=>{i.forEach((e=>e()))})),[]);const W=()=>{(0,p.Nc)(d.PageView.ItemPaymentList),(0,k.uX)(r.userPayments)},M=(0,s.useRef)({}),O=(0,s.useCallback)((t=>{Object.entries(t).forEach((([t,n])=>{e[t]!==n?M.current[t]=n:delete M.current[t]})),D(Object.keys(M.current).length>0),Z(t)}),[e]),R={confirmDeleteConfirm:n("webapp_payment_edition_bank_account_delete_confirm"),confirmDeleteDismiss:n("webapp_payment_edition_bank_account_delete_dismiss"),confirmDeleteSubtitle:n("webapp_payment_edition_bank_account_delete_subtitle"),confirmDeleteTitle:n("webapp_payment_edition_bank_account_delete_title")},j=G||U;return(0,o.tZ)(h.zI,{onNavigateOut:()=>{W()},ignoreCloseOnEscape:j,formId:"bank-account-edit-form",onSubmit:async()=>{if(!E){L(!0);try{const{accountName:a,ownerName:o,bankCode:r}=M.current,i=await b.C.updateBankAccount({...M.current,name:a,owner:o,bank:r,id:e.id});if(i.success){const e=""===I.accountName?n("webapp_payment_edition_bank_account_generic_update_alert"):n("webapp_payment_edition_bank_account_name_update_alert",{accountName:I.accountName});P.showAlert(e,u.BLW.SUCCESS),W()}else L(!1),i.error?.code===l.UpdateBankAccountResultErrorCode.EMPTY_BIC_AND_IBAN?B(new Set(["BIC","IBAN"])):t.reportError(new Error("[payments][edit-bank-account] Unable to update bank account"),i.error?.code)}catch(e){L(!1),t.reportError(e,"[payments][edit-bank-account] Unexpected exception while updating bank account")}}},header:(0,o.tZ)(h.V9,{icon:a||(a=(0,o.tZ)(f.L,null)),iconBackgroundColor:u.colors.dashGreen06,title:e.accountName}),onClickDelete:()=>{T(!0)},itemHasBeenEdited:c,isViewingExistingItem:!0},(0,o.tZ)(S.o,{itemId:e.id,bankAccount:I,errors:N,onCopy:e=>{J.setAlertMessage(e),J.show()},reportError:t.reportError,signalEditedValues:O,areProtectedItemsUnlocked:v,openProtectedItemsUnlocker:V,variant:"edit"}),J.isAlertVisible&&(0,o.tZ)("div",{className:y.Z.alertWrapper},(0,o.tZ)(u.bZj,{size:u.k3y.SMALL,severity:u.BLW.SUCCESS,closeIconName:n("_common_alert_dismiss_button"),onClose:()=>{J.hide()}},J.alertMessage)),U&&(0,o.tZ)(C.h,{closeConfirmDeleteDialog:()=>{T(!1)},onDeleteConfirm:()=>{i.push((()=>b.C.deleteBankAccount({id:e.id})));const t=""===I.accountName?n("webapp_payment_edition_bank_account_generic_delete_alert"):n("webapp_payment_edition_bank_account_name_delete_alert",{accountName:I.accountName});P.showAlert((0,o.tZ)("strong",null,t),u.BLW.SUBTLE),W()},translations:R}))},E=e=>{const{data:t}=(0,r.k)(i.L,"query",{vaultItemTypes:[c.U.BankAccount],ids:[`{${e.match.params.uuid}}`]});return t?.bankAccountsResult.items.length?(0,o.tZ)(D,{...e,item:t.bankAccountsResult.items[0]}):null}},995544:(e,t,n)=>{n.d(t,{B:()=>o});var a=n(696832);const o=()=>{const[e,t]=a.useState(""),[n,o]=a.useState(!1),r=()=>{o(!1)};return a.useEffect((()=>{if(!n)return;const e=setTimeout(r,5e3);return()=>clearTimeout(e)}),[n,e]),{isAlertVisible:n,alertMessage:e,setAlertMessage:t,hide:r,show:()=>{o(!0)}}}},702394:(e,t,n)=>{n.d(t,{Z:()=>u,h:()=>l});var a=n(696832),o=n(142897),r=n(159515),i=n(151796),c=n(201389),s=n(177704);const l=({closeConfirmDeleteDialog:e,onDeleteConfirm:t,translations:n})=>{const{translate:r}=(0,c.Z)(),{confirmDeleteSubtitle:i,confirmDeleteTitle:l,confirmDeleteDismiss:u,confirmDeleteConfirm:d}=n;return a.createElement(o.Vq,{title:l,onClose:e,isOpen:!0,dialogClassName:s.Ht,closeActionLabel:r("_common_dialog_dismiss_button"),isDestructive:!0,actions:{primary:{children:d,onClick:t,id:"deletion-dialog-confirm-button"},secondary:{children:u,onClick:e,autoFocus:!0,id:"deletion-dialog-dismiss-button"}}},i)},u=({reason:e,translations:t,goToSharingAccess:n,closeCantDeleteDialog:s})=>{const{translate:l}=(0,c.Z)(),u=((e,t)=>{const{groupSharingTitle:n,lastAdminTitle:a,genericErrorTitle:o}=e;switch(t){case r.J.LastAdmin:return a;case r.J.GroupSharing:return n;case r.J.Generic:return o;default:return(0,i.U)(t)}})(t,e),d=((e,t)=>{const{groupSharingSubtitle:n,lastAdminSubtitle:a,genericErrorSubtitle:o}=e;switch(t){case r.J.LastAdmin:return a;case r.J.GroupSharing:return n;case r.J.Generic:return o;default:return(0,i.U)(t)}})(t,e);return a.createElement(o.Vq,{isOpen:!0,onClose:s,title:null!=u?u:"",closeActionLabel:l("_common_dialog_dismiss_button"),actions:e===r.J.LastAdmin?{primary:{children:t.lastAdminActionLabel,onClick:n}}:void 0},d)}},159515:(e,t,n)=>{let a;n.d(t,{J:()=>a}),function(e){e[e.LastAdmin=0]="LastAdmin",e[e.GroupSharing=1]="GroupSharing",e[e.Generic=2]="Generic"}(a||(a={}))},461201:(e,t,n)=>{n.d(t,{Z:()=>a});const a={alertWrapper:"alertWrapper--JLZLLWrHCo"}}}]);