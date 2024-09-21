/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by Keycloakify

import { lazy, Suspense, type ReactNode } from "react";

export type ThemeName = "kokoa";

export const themeNames: ThemeName[] = ["kokoa"];

export type KcEnvName = never;

export const kcEnvNames: KcEnvName[] = [];

export const kcEnvDefaults: Record<KcEnvName, string> = {};

export type KcContext =
    | import("./login/KcContext").KcContext
    ;

declare global {
    interface Window {
        kcContext?: KcContext;
    }
}

export const KcLoginPage = lazy(() => import("./login/KcPage"));

export function KcPage(
    props: {
        kcContext: KcContext;
        fallback?: ReactNode;
    }
) {
    const { kcContext, fallback } = props;
    return (
        <Suspense fallback={fallback}>
            {(() => {
                switch (kcContext.themeType) {
                    case "login": return <KcLoginPage kcContext={kcContext} />;
                }
            })()}
        </Suspense>
    );
}

/* prettier-ignore-end */
