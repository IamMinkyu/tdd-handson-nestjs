import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { Orders } from './entity/orders.entity';
import { ApiParam } from '@nestjs/swagger';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {

    constructor(private readonly orderRepository: OrdersService) { }
    @Get()
    async getAllOrders(): Promise<Orders[]> {
        return await this.orderRepository.find();
    }

    @Get(':id')
    async getOrderDetail(@Param() params: any): Promise<Orders> {
        return await this.orderRepository.findOne(params.id);
    }

    @Post()
    @HttpCode(201)
    async createOrder(@Body() dto: any): Promise<void>
    {
        
    }

    @Patch()
    @HttpCode(204)
    async updateOrder(@Body() dto: any): Promise<void>
    {
        
    }

    @Delete(':id')
    @HttpCode(200)
    @ApiParam({name: 'id', required: true})
    async deleteOrder(@Param() param: any): Promise<any>
    {
        const id: string = param.id;
        return { message: `주문이 취소되었습니다. [주문 번호:${param.id}]` };
    }
}
