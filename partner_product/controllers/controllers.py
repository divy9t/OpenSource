# -*- coding: utf-8 -*-
# from odoo import http


# class PartnerProduct(http.Controller):
#     @http.route('/partner_product/partner_product/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/partner_product/partner_product/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('partner_product.listing', {
#             'root': '/partner_product/partner_product',
#             'objects': http.request.env['partner_product.partner_product'].search([]),
#         })

#     @http.route('/partner_product/partner_product/objects/<model("partner_product.partner_product"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('partner_product.object', {
#             'object': obj
#         })
